import refs from './refs';
import Notiflix from "notiflix";

const fetchCountries = (query) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${query}?fields=name;capital;population;flag;languages`)
    .then(response => {
            return response.json();
        })
        .then(data => data)
}

export default fetchCountries;