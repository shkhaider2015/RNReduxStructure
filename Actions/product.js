export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS ='FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductBegin = () =>
({
    type : FETCH_PRODUCTS_BEGIN
})

export const fetchProductSuccess = products => ({
    type : FETCH_PRODUCTS_SUCCESS,
    payload : { products }
})

export const fetchProductFailure = error => ({
    type : FETCH_PRODUCTS_FAILURE,
    payload : { error }
})

export const fetchProducts = () =>
{
    return dispatch => {
        dispatch(fetchProductBegin());
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log("success :::: ", json)
                dispatch(fetchProductSuccess(json.slice(0,2)))
                return json
            })
            .catch( error => dispatch(fetchProductFailure(error)))

    }
}

const handleErrors = (response) =>
{
    if(!response.ok)
    {
        throw Error(response.statusText);
    }

    return response;
}