from telegram import Bot, ParseMode
from constants import TOKEN
from api import (get_anime_ids_of_new_episodes, 
                 get_anime_distribution_subscribers_telegram_chat_ids,
                 get_anime_info)
from utils import get_list_difference
import time

bot = Bot(TOKEN)

current_anime_ids = get_anime_ids_of_new_episodes()
def episode_distribution():
    global current_anime_ids
    anime_ids = get_anime_ids_of_new_episodes()
    difference = get_list_difference(current_anime_ids, anime_ids)
    for anime_id in difference:
        print(f"sending telegram messages for anime with id {anime_id}")
        anime_name = get_anime_info(anime_id)["name"]
        chat_ids = get_anime_distribution_subscribers_telegram_chat_ids(anime_id)
        for chat_id in chat_ids:
            try:
                bot.send_message(chat_id=chat_id, text=f"{anime_name}: *только что вышла новая серия*", parse_mode=ParseMode.MARKDOWN)
            except:
                pass
    current_anime_ids = anime_ids

if __name__ == '__main__':
    while True:
        episode_distribution()
        time.sleep(10)