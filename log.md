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

## things to learn / user stories

### As a user I want to search for a pokemon and return the list of pokemon that it can breed with

- [learn] how to make a drop down in react to hold the list of pokemon

- how to make a button to retrieve the other compatible pokemon / hit enter in the search bar
- how to display a list of pokemone the lookup pokemon can breed with

### MVP

- input pokemon name
- return list of other pokemon names it can breed with

### feature ideas

- display results in two tables if the pokemon has two egg groups.
- for each pokemon in the list show the egg groups it is in. [individual item data]
- tree view like show a list of all pokemon and then click that pokemon to show in the right hand side what pokemon it can breed with.

- useful link https://pokemondb.net/mechanics/breeding to come up with examples and the breeding rules

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
