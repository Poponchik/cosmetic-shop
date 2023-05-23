// const fs = require('fs')
// const youtubedl = require('youtube-dl-exec')
const ytdl = require('ytdl-core')
const unorm = require('unorm')
const { sendAudioTelegram, downloadYoutubedl } = require('./audioFunction.js')
const { audioHandler, createAudioHandlers, removeAudioHandlers } = require('../../hendlers/audioHandler.js')
const { getCleanVideoUrl } = require('../../normalizeLink.js')
const { AudioFile } = require('../../models.js')

const botName = 'скачано с помощью @AudioVisualGenieBot'
// const token = process.env.TOKEN_BOT





async function audioDownloader(bot, chatId) {
  let normalizedFilename
  let audioFile

  const messageAudioHandler = async (msg) => {
    if (msg.chat.id === chatId) { // проверяем, что сообщение от того же пользователя, которому отправили запрос
      const text = msg.text
      if (text === '/start' || text === '/info') { return removeAudioHandlers(bot, chatId) }

      const videoUrl = msg.text
      const normalVideoUrl = await getCleanVideoUrl(bot, chatId, videoUrl)


      const videoInfo = await ytdl.getInfo(normalVideoUrl)

      const authorName = videoInfo.videoDetails.author.name
      const videoTitle = videoInfo.videoDetails.title
      let filename = `${authorName}-${videoTitle}`.replace(/[/\\?%*:|"<>]/g, '').replace(/"/g, '\'').substr(0, 64)
      normalizedFilename = unorm.nfc(`${filename}.mp3`)

      
      console.log('normalVideoUrl::', normalVideoUrl)

      try {
        audioFile = await AudioFile.findOne({ where: { videoLink: normalVideoUrl } });
        console.log("audioFile::", audioFile)

        if (!audioFile) {
          // console.log('Запись о файле не найдена в базе данных');
          await downloadYoutubedl(bot, chatId, botName, videoTitle, normalizedFilename, normalVideoUrl);
          return console.log(`Файл ${normalizedFilename} отправлен в чат ${chatId}`);
        }

        const telegramFile = await bot.getFile(audioFile.audioLink);
        if (telegramFile) {
          // console.log('Файл найден, выполняйте необходимые действия');
          const fileSize = telegramFile.file_size
          await sendAudioTelegram(bot, chatId, botName, audioFile.audioLink, fileSize);
        }

      } catch (error) {
        await AudioFile.destroy({ where: { videoLink: normalVideoUrl } });
        await downloadYoutubedl(bot, chatId, botName, videoTitle, normalizedFilename, normalVideoUrl);
        // console.error('Ошибка при получении файла:', error);
      }


    }
  }


  if (!audioHandler.has(chatId)) {
    createAudioHandlers(bot, chatId, messageAudioHandler)
  }
}

async function audioDownloader222(bot, chatId) {
  return chatId
}

module.exports = { audioDownloader, audioDownloader222 }



