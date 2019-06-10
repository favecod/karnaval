import axios from 'axios'
import { apiURL } from 'Root/config'

export default async function () {
    const options = {
        method: 'get',
        url: apiURL + '/footer/logo',
    }
    return await axios(options)
}