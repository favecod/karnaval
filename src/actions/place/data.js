import types from 'Root/actions'
import store from 'Root/store'

export default data => {
    store.dispatch({
        type: types.place.DATA,
        data,
    })
}