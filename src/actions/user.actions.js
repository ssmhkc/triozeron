import axios from 'axios';
export const GET_BRANDS = 'GET BRANDS';
export const GET_GAMES = 'GET GAMES';

const ip = 'http://178.18.200.116:97'

export function TestLogin()
{
    const model = {
        email: 'buyer@creosafe.com',
        password: 'demo03'
    }
    const request = axios.get('https://test.creosafe.io/graphql',model);
    
    return (dispatch) =>
        request.then((response) => (
                console.log(response),
                Promise.all([
                    dispatch({
                        type: GET_BRANDS,
                        payload: response.data.Data
                    }),
                    // dispatch(getTerritories('semih'))
                ])
            )
        );
}


export function getGames( amount,page )
{
    console.log(amount)

    const request = axios.get('https://catalog.api.gamedistribution.com/api/v1.0/rss/All/?collection=exclusive&categories=All&type=all&format=json&page='+page+'&amount='+amount);
    
    return (dispatch) =>
        request.then((response) => (
                console.log(response),
                Promise.all([
                    dispatch({
                        type: GET_GAMES,
                        payload: response.data
                    }),
                    // dispatch(getTerritories('semih'))
                ])
            )
        );
}



