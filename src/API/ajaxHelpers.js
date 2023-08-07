
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/`;


export const fetchPlayers = async () => {
    try {
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players`);
        if (!response.ok){
            throw new Error ('Failed to fetch players');
        }

        const data = await response.json();
        
        return data;

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
        return [];
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/${playerId}`);
        if (!response.ok){
            throw new Error ('Failed to fetch player #${playerId}');
        }

        const data = await response.json();
        console.log(data)
        return data;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

export const deletePlayer = async (playerId) => {
    try {
        const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players' + playerId, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error ('Failed to remove player #${playerId}');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};