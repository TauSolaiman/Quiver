import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
} from './../Actions/FetchCoinData';

const initialState = {
  isFetching: null,
  data: [],
};


export default function(state = initialState, action) {

  switch (action.type) {

      case FETCHING_COIN_DATA:
          return Object.assign({}, state, {
              isFetching: true,
          });

      case FETCHING_COIN_DATA_SUCCESS:
          return Object.assign({}, state, {
              isFetching: false,
              data: action.coins,
          });
      default:
          return state;
  }
}
