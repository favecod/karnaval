import axios from 'axios'
import { apiURL } from 'Root/config'

export default async function (data) {
    const options = {
        method: 'get',
        url: apiURL + `/recent/image?id=${data}`,
        
    }
    return await axios(options)
}