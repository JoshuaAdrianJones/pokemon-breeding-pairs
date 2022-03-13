# Utils for data processing of the json files
# aims to build static resources by making API requests one time instead of making app make API requests continuously.
# also aims to mung data to more convenient forms for app

from tokenize import group
from urllib import response
import requests
import json

NUMBER_OF_EGG_GROUPS = 15
EGG_GROUPS = range(1, 16)
BASE_URL = "https://pokeapi.co/api/v2"
EGG_RESOURCE = "egg-group"
SPECIES_RESOURCE = "pokemon-species"
NUMBER_OF_BDSP_POKEMON = 493
POKEMON_RANGE = range(1,494)

def list_pkmn_data(pkmn_number:int):
    print(f"trying to get egg-groups:{BASE_URL}/{SPECIES_RESOURCE}/{pkmn_number}")
    response = requests.get(f"{BASE_URL}/{SPECIES_RESOURCE}/{pkmn_number}").json()
    name = response["name"]
    egg_groups = response["egg_groups"]

    results = {
                "id": pkmn_number, 
                "name":name, 
                "egg_groups":egg_groups
            }
    
    return json.dumps(results)

def produce_all_pkmn_data():
    #POKEMON_RANGE= range(1,6)
    f = open("pokemon_data.json", "a")
    f.write("[")
    for pkmn_num in POKEMON_RANGE:
        listing = list_pkmn_data(pkmn_num)
        f.write(listing)
        f.write(",")
    f.write("]")
    f.close()

def list_egg_groups():
    """
    lists all current egg groups
    """
    print(f"trying to get egg-groups:{BASE_URL}/{EGG_RESOURCE}")
    response = requests.get(f"{BASE_URL}/{EGG_RESOURCE}").json()
    results = response["results"]
    print(results)


def get_egg_group_data(group_number: int):
    """
    Writes a specific egg group to json file
    group_number: egg group number : Int
    """

    print(f"trying to get specific egg group: {group_number}")
    group_n = requests.get(f"{BASE_URL}/{EGG_RESOURCE}/{group_number}").json()
    print(group_n)

    f = open(f"egg_group_{group_number}.json", "w")
    f.write(json.dumps(group_n))
    f.close()
    print("wrote file successfully.")


def produce_all_egg_group_data():
    """
    Only to be run ONCE to build the data files for each egg group
    """
    for grp_num in EGG_GROUPS:
        get_egg_group_data(grp_num)


class EggGroup:
    """
    non implementing class as documentation of app logic not to be implemented in python but this seemed useful at the time
    to keep some ideas in the same place as the data munging code.
    """

    def __init__(self):
        self.groupID = 1
        self.name = "example"
        self.pokemon = [
            {"id": "1", "name": "bulbasaur"},
            {"id": "2", "name": "venasuar"},
        ]


class pokemon:
    """
    non implementing class as documentation
    """

    def __init__(self) -> None:
        self.id = "1"
        self.name = "pokemon name"
        self.egg_groups = ["monster", "water"]
