# dev log file

- using create react app
- using the pokeAPI https://pokeapi.co/
- aimed at supporting pokemon brilliant diamond and shining pearl
- [action] pulled list of pokemon from the api using `https://pokeapi.co/api/v2/pokemon/?limit=1000` to pull without rate-limit
- [action] deleted listing up until #493 in hindsight could just do `https://pokeapi.co/api/v2/pokemon/?limit=493` to get the same thing

- [action] add pokemon logo and egg image, title, dropdown component.
- [action] set up git `.gitignore` file etc.
- [action] fixed folder structure since create react app put everything in a `/src` folder so we had `/src/src` initially.
- [action] added prettier as the code formatter.
- [action] added a pokemon style google font to the project:

- turns out the api endpooint needs to be pokemon-species not /pokemon

- [action] added id to `egg_groups.json` file
- [action] added data-utils.py to prepare json files for pokemon data in better format and to avoid regular api calls to pokeapi

- [action] /[resource] built all egg groups as multiple `.json` files in `/data/`

- before thinking about components I spent a lot of time thinking about the data shape like what properties should my json files have to be able to look up between them.

- [action] figured out how to `fetch()` from public this was a real pain because I had to use react hooks with the functional components I started with and it wasn't clear anywhere online how to get fetch properly, in the end console.log was helpful in figuring out what was being pulled out of the fetch response and how to use it.

- [action] built the full pokemon list for the input portion of the app

- [explore] components to make the drop down - added https://mui.com/components/selects/#basic-select

- seems like putting `export default function` at the top rather than the bottom is more common with newer tutorials.

- [update] at the point where we can look up a pokemon and return the egg groups

- [update] for each egg group list the pokemon in that egg group

- [action] added stuff in state

- [update 17-03-22] complete and deployed it works!

- learned about developer tools in chrome

- seems like I don't understand the state process properly since stuff doesn't update properly each time.

## things to learn / user stories

### As a user I want to search for a pokemon and return the list of pokemon that it can breed with

- [learn] how to make a drop down in react to hold the list of pokemon

- how to make a button to retrieve the other compatible pokemon / hit enter in the search bar /alternatively just update state with the selected pokemon
- how to display a list of pokemon the lookup pokemon can breed with

- code is bad and nit working properly I shoukd refactor into more managable components

### refactoring ideas

- components:
- App
- Welcome banner (static)
- BreedingPairsFinder (parent with state)
  - PokemonSelector
  - DisplaySelectedPkmnData
  - DisplayCompatiblePokemon

variables:
initial_pokemon = bulbasaur
from currently_selected_pokemon get egg_groups
from egg_groups get compatible_pokemon

### MVP

- input pokemon name
- return list of other pokemon names it can breed with
- MVP done!

### feature ideas

- display results in two tables if the pokemon has two egg groups.
- for each pokemon in the list show the egg groups it is in. [individual item data]
- tree view like show a list of all pokemon and then click that pokemon to show in the right hand side what pokemon it can breed with.

- useful link https://pokemondb.net/mechanics/breeding to come up with examples and the breeding rules

- shortest common pathing
  idea given two pokemon without a breeding pair find the shortest overlapping path

useful for spreading IV's

input

pokemon:

1 [A,B]
2 [C,D]
find pokemon 3 with A or B & [C or D]
if no pathing for pokemon 3 find
pokemon 3 A or B with E where E has a pokemon 4 with [E,C] or [E,D]

### App logic

```
egg_groups
+--------------------+
|name                |
|id                  |
|egg group           |
|pokemon in group    |
|                    |
|                    |
+--------------------+

 all_pokemon
+--------------------+
|name                |
|id                  |
|egg groups          |
|                    |
|                    |
+--------------------+
```

- data flow:

  - from name get egg groups
  - for egg-groups get pokemon in egg groups

so we need mapping of:

```
pokemon name : egg groups

egg group : pokemon names in egg group
```

- note added `log.md` to `.prettierignore` to preserve the box layout drawings here

- added a second remote to host the repo on gitlab
