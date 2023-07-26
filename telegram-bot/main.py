from telegram.ext import Updater, CommandHandler
from telegram import ReplyKeyboardMarkup
import threading
from distribution import episode_distribution
from constants import TOKEN, BOT_KEYBOARD_OPTIONS

def start(update, context):
    keyboard = []
    options_length = len(BOT_KEYBOARD_OPTIONS)
    for index in range(0, options_length, 2):
        if index != options_length-1:
            keyboard.append([BOT_KEYBOARD_OPTIONS[index], BOT_KEYBOARD_OPTIONS[index+1]])
        else:
            keyboard.append([BOT_KEYBOARD_OPTIONS[index]])

    reply_markup = ReplyKeyboardMarkup(keyboard)
    update.message.reply_text("Я аниме бот :). Выберите что вы хотите?", reply_markup=reply_markup)

def get_chat_id(update, context):
    chat_id = update.effective_chat.id
    update.message.reply_text(chat_id)

if __name__ == "__main__":
    updater = Updater(TOKEN)
    bot = updater.bot
    dispatcher = updater.dispatcher

    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("chat_id", get_chat_id))

    #distribution in another thread
    threading.Thread(target=episode_distribution, args=[bot]).start()

    updater.start_polling()
