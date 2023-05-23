const TelegramBot = require('node-telegram-bot-api')


const sequelize = require('./db.js')
const { startOptions } = require('./options.js')
const { User } = require('./models.js')
const { audioDownloader } = require('./service/audioProcessing/audioDownloader.js')
// const { audioDownloader } = require('./service/audio-processing/audioDownloader.js')

// const { tiktokDownloader } = require('./processing/tiltok-processing/tiktokDownloader.js')

// const { removeAudioHandlers } = require('./hendlers/audioHandler.js')
// const { removeTiktokHandlers } = require('./hendlers/tikTokHandler.js')

require('dotenv').config()


// const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// console.log(audioDownloader)
// audioDownloader()
const token = process.env.TOKEN_BOT
const bot = new TelegramBot(token, { polling: true });

// const bot = new TelegramBot(token, {
//     baseApiUrl: 'https://127.0.0.1:8081/bot',
//   })



// const a = bot.logOut()
// console.log(a)


const start = async () => {
  try {
    // bot.logOut()
    // console.log('start::')
    // // const response = await axios.post(`https://api.telegram.org/bot${token}/getMe`, {
    // const response = await axios.post(`http://127.0.0.1:8081/bot${token}/getMe`, {
    //   method: `getMe`,
    // })


    // console.log('response::', response.data)

    await sequelize.authenticate()
    await sequelize.sync()
  } catch (e) {
    console.log('Подключение к бд сломалось', e)
  }

  bot.setMyCommands([
    { command: '/start', description: 'start message' },
    { command: '/info', description: 'get info' },
  ])


  bot.onText(/^\/start/, async (msg) => {
    const chatId = msg.chat.id;
    try {

      const user = await User.findOne({ where: { chatId } })
      if (user) {
        return bot.sendMessage(chatId, 'Выберите опцию1:', startOptions)
      }
      await User.create({ chatId })
      return bot.sendMessage(chatId, 'Выберите опцию2:', startOptions)
    } catch (e) {
      return bot.sendMessage(chatId, 'Произашла ошибка')
    }
  });




  // bot.on('callback_query', async query => {
  //   const chatId = query.message.chat.id
  //   const option = query.data
  //   console.log('option:10:', option)

  //   if (option === 'downloadTikTok') {
  //     await removeAudioHandlers(bot, chatId)
  //     console.log('test:10:')

  //     await bot.sendMessage(chatId, 'Введите ссылку на TikTok:')

  //     tiktokDownloader(bot, chatId)


  //   }
  // })



  // bot.on('callback_query', async query => {
  //   const chatId = query.message.chat.id;
  //   const option = query.data;

  //   if (option === 'downloadAudio') {
  //     removeTiktokHandlers(bot, chatId)
  //     await bot.sendMessage(chatId, 'Введите ссылку на видео:');
  //     audioDownloader(bot, chatId)
  //   }
  // })










}






start()