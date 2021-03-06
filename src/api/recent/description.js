import axios from 'axios'
import { apiURL, headers } from 'Root/config'

export default async function (data) {
    const options = {
        method: 'get',
        url: apiURL + `/recent/description?id=${data}`,
        headers,
    }
    return await axios(options)
}