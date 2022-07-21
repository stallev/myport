import TelegramClient from "messaging-api-telegram/dist/TelegramClient";
import { Buffer } from 'buffer';

const ACCESS_TOKEN = '5443865877:AAGUhEUiMi4psT85jENkjP3IMw_jzJIn3tI';
const CHAT_ID = '-669525012';

// get accessToken from telegram [@BotFather](https://telegram.me/BotFather)
const contactMessageClient = new TelegramClient({
  accessToken: ACCESS_TOKEN,
});

const sendMessageToTelegram = async(message) => {
  console.log('Message is ' + message);
  console.log(contactMessageClient);
  return await contactMessageClient.sendMessage(CHAT_ID, message, {
    disableWebPagePreview: true,
    disableNotification: true,
  });
}

export default sendMessageToTelegram;