import axios from 'axios';
import fetchConstants from '../utils/config.json';

// default state

const defaultState = {
  isfetched: false,
}

// reducers

export function dataViewReducer(state={}, action){
  switch(action.type){
    case "FETCH_DATA": {
            if( action.payload.items === undefined )
              return {
                ...state,
                items:[],
                isfetched: true,
              }
            return { 
              ...state,
              ...action.payload,
              isfetched: false,
            }
    }     
    default:{
             return state;
    }
  }
}

// actions

export const fetchData = query => (dispatch, getState) => {
  axios.get(fetchConstants["DATA_FETCH_URL"]+query.trim())
      .then(function(response){
          console.log("response=====>", response)
          dispatch({
              type:"FETCH_DATA",
              payload: response.data,
          })
      });
}


