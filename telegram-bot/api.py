import requests
from constants import BACKEND_URL, HEADERS

def get_anime_ids_of_new_episodes():
    requested_url = BACKEND_URL + "get_new_episodes"
    response = requests.get(requested_url).json()
    result = []
    for episode in response:
        result.append(episode["anime"])
    return result

def get_anime_distribution_subscribers_telegram_chat_ids(anime_id):
    requested_url = BACKEND_URL + "get_anime_distribution_subscribers_telegram_chat_ids/" + f'{anime_id}'
    response = requests.get(requested_url, headers=HEADERS).json()
    return response

def get_anime_info(anime_id):
    requested_url = BACKEND_URL + "get_anime/" + f'{anime_id}'
    response = requests.get(requested_url).json()
    return response

