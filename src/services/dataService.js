

const getGist = (userName = '', page = 1) => {
    const url =`https://api.github.com/users/${userName}/gists?per_page=3&page=${page}`
    return fetch(url)
        .then(res => res.json())
}

const getForkedDetails = (url) => {
    return fetch(url).then(res => res.json())
}

const dataService = {
    getGist,
    getForkedDetails
};
export default dataService