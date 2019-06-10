import axios from 'axios'
import { apiURL, headers } from 'Root/config'

export default async function (data) {
    const options = {
        method: 'get',
        url: apiURL + `/recent/title?id=${data}`,
        headers,
    }
    return await axios(options)
}