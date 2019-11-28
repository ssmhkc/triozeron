import _ from 'lodash';
import * as Actions from '../actions';

const initialState = {
    
    brnds:[],
    games:[],
    assetList:[],

    
}

const userReducer = function (state = initialState, action) {
    
    switch ( action.type )
    {
        case Actions.GET_BRANDS:
        {
            console.log(action.payload)
            return {
                ...state,
                brnds   : action.payload,
                searchText : '',
                routeParams: action.routeParams
            };
        }
        case Actions.GET_GAMES:
        {
            console.log(action.payload)
            return {
                ...state,
                games   : action.payload,
                assetList: action.payload.assetList,
                searchText : '',
                routeParams: action.routeParams
            };
        }
        default:
            return state;
    }
    
};

export default userReducer;