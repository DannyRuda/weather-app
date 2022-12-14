import { getMatchingCities } from "./weatherAPI";

function createCity(possibleCity, i) {
  const { name } = possibleCity;
  const { country } = possibleCity;
  const latAndLon = [possibleCity.lat, possibleCity.lon];
  const index = i;
  return { name, country, latAndLon, index };
}

// used as event handler for input on search bar
async function getAndFillSuggestions(event) {
  const search = event.target;
  const searchText = search.value.toLowerCase();
  const possibleCities = await getMatchingCities(searchText);

  const citiesArray = possibleCities.map((possibleCity, i) =>
    createCity(possibleCity, i)
  );
  const suggestions = document.querySelector(".suggestions");
  const suggestionArray = citiesArray.map((city) => {
    const suggestion = document.createElement("p");
    suggestion.innerText = `${city.name}, ${city.country}`;
    suggestion.dataset.index = city.index;
    return suggestion;
  });
  suggestions.replaceChildren(...suggestionArray);
  return citiesArray
}

function addEventListenersToSuggestions() {}
export { getAndFillSuggestions };
