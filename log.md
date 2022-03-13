# dev log file

- using create react app
- using the pokeAPI https://pokeapi.co/
- aimed at supporting pokemon brilliant diamond and shining pearl
- [action] pulled list of pokemon from the api using `https://pokeapi.co/api/v2/pokemon/?limit=1000` to pull without rate-limit
- [action] deleted listing up until #493 in hindsight could just do `https://pokeapi.co/api/v2/pokemon/?limit=493` to get the same thing

- [action] add pokemon logo and egg image, title, dropdown component
- [action] set up git `.gitignore` file etc.

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
- for each pokemon in the list show the egg groups it is in.
