import axios from 'axios'
import { apiURL, headers } from 'Root/config'

export default async function () {
    const options = {
        method: 'get',
        url: apiURL + '/footer/logo',
        headers,
    }
    return await axios(options)
}