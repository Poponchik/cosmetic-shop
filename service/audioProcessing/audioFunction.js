const { AudioFile } = require('../../models.js')
const fs = require('fs')
const youtubedl = require('youtube-dl-exec')
const ytdl = require('ytdl-core')
const unorm = require('unorm')


// async function sendAudioTelegram(bot, chatId, botName, audioLink, fileSize) {
//   const response = await bot.sendAudio(chatId, audioLink, {
//     caption: botName,
//     contentType: 'audio/mpeg',
//     fileSize: fileSize
//   })
//   return response.audio.file_id;
// }

async function sendAudioTelegram(bot, chatId, botName, audioLink, fileSize) {
  console.log('audioLink::', audioLink)
  // if (fileSize >= 50 * 1024 * 1024) {
  // if (fileSize <= 50 * 1024 * 1024) {

  // Отправка аудиофайла в виде аудио
  const response = await bot.sendAudio(chatId, audioLink, {
    caption: botName,
    contentType: 'audio/mpeg',
    fileSize: fileSize
  })
  console.log('response.document.file_id::00', response.audio.file_id);
  console.log('audioLink:00:', audioLink)
  return response.audio.file_id;
  // }
  // else {

  //   console.log('fileSize:01:', fileSize)
  //   console.log('audioLinkAWS:01:', audioLinkAWS)
  //   // console.log('encodedAudioLink:01:', encodedAudioLink)
  //   const response = await bot.sendAudio(chatId, audioLinkAWS, {
  //     caption: botName,
  //     contentType: 'audio/mpeg',
  //     fileSize: fileSize
  //   })
  //   console.log('Аудиофайл успешно отправлен как документ00');
  //   console.log('response.document.file_id', response.audio.file_id);
  //   return response.audio.file_id;

  // }
  // return response;
}



async function downloadYoutubedl(bot, chatId, botName, videoTitle, normalizedFilename, normalVideoUrl) {
  // const videoInfo = await ytdl.getInfo(normalVideoUrl)

  // const authorName = videoInfo.videoDetails.author.name
  // const videoTitle = videoInfo.videoDetails.title
  // let filename = `${authorName}-${videoTitle}`.replace(/[/\\?%*:|"<>]/g, '').replace(/"/g, '\'').substr(0, 64)
  // normalizedFilename = unorm.nfc(`${filename}.mp3`)

  await bot.sendMessage(chatId, `Загрузка видео "${videoTitle.substr(0, 15)}.." началась, ожидайте`)
  // console.log('normalizedFilename::', normalizedFilename)
  // console.log('normalVideoUrl::', normalVideoUrl)
  youtubedl(normalVideoUrl, {
    noCheckCertificates: true,
    noWarnings: true,
    preferFreeFormats: true,
    addHeader: [
      'referer:youtube.com',
      'user-agent:googlebot'
    ],
    extractAudio: true,
    audioFormat: 'mp3',
    audioMultistreams: true,
    output: `./downloads/${normalizedFilename}`,
    ffmpegLocation: '/usr/bin/ffmpeg'
  }).then(async output => {
    try {
      filePath = `./downloads/${normalizedFilename}`
      // const fileData = await fs.promises.readFile(filePath)
      // console.log('fileData::', fileData)
      fileStats = fs.statSync(filePath)
      const fileSize = fileStats.size

      if (fileSize >= 50 * 1024 * 1024) {
        const fileSizeInMB = fileSize / 1048576
        const roundedFileSizeInMB = fileSizeInMB.toFixed(2)
        return bot.sendMessage(chatId, `Файл занимает ${roundedFileSizeInMB}Mb. Файлы свыше 50 Mb пока что не поддерживаются`)

        // filePathAWS = await createFileAWS({ data: fileData, mimetype: 'audio/mpeg' }, normalizedFilename);
      }




      const fileId = await sendAudioTelegram(bot, chatId, botName, filePath, fileSize)
      console.log('fileId::', fileId)
      await AudioFile.create({ videoLink: normalVideoUrl, audioLink: fileId });
      console.log('Audio file uploaded')


      await fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Ошибка при удалении файла:', err);
          // fs.unlinkSync(filePath) // удалить загруженый файл
        } else {
          console.log('Файл удален успешно:', filePath);
        }
      })


    } catch (error) {
      console.log('Error uploading audio file:', error)
    }
  }).catch(async err => {
    console.log('Error downloading audio file:', err)
    return bot.sendMessage(chatId, 'Произошла ошибка при загрузке аудио файла, повторите попытку')
  })
}








module.exports = { sendAudioTelegram, downloadYoutubedl }
