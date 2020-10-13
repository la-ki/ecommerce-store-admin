import axios from '../helpers/axios';

export const addProduct = form => {
    return async dispatch => {
        const res = await axios.post(`/product/createProduct`, form);
    }
}