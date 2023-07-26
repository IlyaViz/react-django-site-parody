from telegram import ParseMode
import time
from requests.exceptions import ConnectionError
from constants import TOKEN
from api import (get_anime_ids_of_new_episodes, 
                 get_telegram_chat_ids_of_anime_distribution_subscribers,
                 get_anime_info)
from utils import get_list_difference

def episode_distribution(bot):
    while True:
        try:
            current_anime_ids = get_anime_ids_of_new_episodes()
            while True:
                time.sleep(10)
                anime_ids = get_anime_ids_of_new_episodes()
                difference = get_list_difference(current_anime_ids, anime_ids)
                
                for anime_id in difference:
                    print(f"sending telegram messages for anime with id {anime_id}")
                    anime_name = get_anime_info(anime_id)["name"]
                    page = 1
                    while True:
                        try:
                            chat_ids = get_telegram_chat_ids_of_anime_distribution_subscribers(anime_id, page)
                            page += 1
                        except:
                            break
                        for chat_id in chat_ids:
                            try:
                                bot.send_message(chat_id=chat_id, text=f"{anime_name}: *только что вышла новая серия*", parse_mode=ParseMode.MARKDOWN)
                            except:
                                pass
                current_anime_ids = anime_ids
        except (ValueError, ConnectionError):
            print("server is unavailable")
            time.sleep(10)
        