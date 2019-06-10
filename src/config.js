const websiteURL = `https://karnaval.herokuapp.com`
const apiURL = `${websiteURL}/api`
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}

module.exports = {
    websiteURL,
    apiURL,
    headers
}
