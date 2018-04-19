const mrssEndpoint = 'https://www.snagfilms.com/apis/films.json?limit=10'

export const loadFilms = () => {
    return fetch(mrssEndpoint)
        .then(res => res.json())
        .then((data)=> {
        return data.films.film;
    })
}