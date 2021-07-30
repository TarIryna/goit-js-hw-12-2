import refs from "./refs";
import Notiflix from "notiflix";
import countryCard from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';

function createResults(countries) {
    if (countries.length > 10)
    { Notiflix.Notify.info("Too many matches found. Please enter a more specific name."); }
    else if (countries.length > 1 && countries.length < 11) {
        clearMarkup();
        const html = countryList(countries);
        refs.ul.innerHTML = html; 
    }
    else if (countries.length === 1) {
        clearMarkup();
       refs.info.innerHTML = countryCard(...countries);    
    }
    else { 
        Notiflix.Notify.failure("Too many matches found. Please enter a more specific name.");
        clearMarkup(); 
        }
}

function clearMarkup(){
    refs.ul.innerHTML = '';
    refs.info.innerHTML = '';
}

export default createResults;