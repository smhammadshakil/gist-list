
const baseURL = 'https://api.github.com'
const users = `${baseURL}/users`
const gist = `${baseURL}/gists`

const pageLimit = 3

const getGist = (userName = '', page = 1) => {
    const url =`${users}/${userName}/gists?per_page=${pageLimit}&page=${page}`
    return fetch(url).then(res => res.json())
}

const getForkedDetails = (id) => {
    const url = `${gist}/${id}/forks?per_page=3`
    return fetch(url).then(res => res.json())
}

const dataService = {
    getGist,
    getForkedDetails
};
export default dataService