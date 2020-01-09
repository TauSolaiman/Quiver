import axios from 'axios'
import { apiUrl } from './../utils/Constants'

//ACTION TYPES
export const FETCHING_COIN_DATA = "FETCHING_COIN_DATA"
export const FETCHING_COIN_DATA_SUCCESS = "FETCHING_COIN_DATA_SUCCESS"


//ACTION CREATORS
const fetchingCoinData = (coins) => {
    return {
        type: FETCHING_COIN_DATA,
        coins
    }
}

const fetchingCoinSuccess = (coins) => {
    return {
        type: FETCHING_COIN_DATA_SUCCESS,
        coins
    }
}


//THUNK 
  export default function FetchCoinData() {
    return async dispatch => {     
         dispatch({ type: FETCHING_COIN_DATA })
        try {
             const {data} = await axios.get(`${apiUrl}/v1/ticker/?limit=10`)
             dispatch(fetchingCoinSuccess(data));
        } catch (err) {
            console.err(err)
        }
    }
}

