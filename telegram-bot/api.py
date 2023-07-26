import requests
from constants import BACKEND_URL, HEADERS

def get_anime_ids_of_new_episodes():
    requested_url = BACKEND_URL + "get_new_episodes"
    response = requests.get(requested_url)
    if response.status_code != 200:
        raise ValueError("No page found")
    response = response.json()
    result = []
    for episode in response:
        result.append(episode["anime"])
    return result

def get_telegram_chat_ids_of_anime_distribution_subscribers(anime_id, page):
    requested_url = BACKEND_URL + "get_telegram_chat_ids_of_anime_distribution_subscribers/" + f'{anime_id}'
    params = {"page": page}
    response = requests.get(requested_url, params=params, headers=HEADERS)
    if response.status_code != 200:
        raise ValueError("No page found")
    return response.json()

def get_anime_info(anime_id):
    requested_url = BACKEND_URL + "get_anime/" + f'{anime_id}'
    response = requests.get(requested_url)
    if response.status_code != 200:
        raise ValueError("No page found")
    return response.json()