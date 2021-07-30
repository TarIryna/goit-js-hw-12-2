import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import refs from './refs';
import createResults from './createResults';
const DEBOUNCE_DELAY = 300;


refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
    if (refs.input.value.trim()) {
        refs.query = refs.input.value.trim();
        const getResults = () => {
            fetchCountries(refs.query).then(countries => {
                createResults(countries);
            })
        };
        getResults();
    }
    return;
}
