# Utils for data processing of the json files
# aims to build static resources by making API requests one time instead of making app make API requests continuously.
# also aims to mung data to more convenient forms for app

from tokenize import group
from urllib import response
import requests

NUMBER_OF_EGG_GROUPS = 15
BASE_URL = "https://pokeapi.co/api/v2"
RESOURCE = "egg-group"
# https://pokeapi.co/api/v2/egg-group/
print(f"trying to get egg-groups:{BASE_URL}/{RESOURCE}")

response = requests.get(f"{BASE_URL}/{RESOURCE}").json()
results = response["results"]


class EggGroup:
    def __init__(self):
        self.groupID = 1
        self.name = "example"
        self.pokemon = [
            {"id": "1", "name": "bulbasaur"},
            {"id": "2", "name": "venasuar"},
        ]
