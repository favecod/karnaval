function set(key, value) {
    return localStorage.setItem(key, value)
}

function get(key) {
    return localStorage.getItem(key)
}

function remove(key) {
    return localStorage.removeItem(key)
}

function change(name, object) {
    let storage = get(name)
    let data = JSON.parse(storage)
    Object.assign(data, object)
    set(name, JSON.stringify(data))
    return data
}

export default {
    set, 
    get,
    remove,
    change,
}