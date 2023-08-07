import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { fetchPlayers } from "../API/ajaxHelpers";
const AllPlayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect (() => {
        const getPlayers = async () => {
            const response = await fetchPlayers();
            const playersData = response.data.players;
            
            setPlayers(playersData);
        };
        getPlayers();
    }, []);
    
    return (
        <div>
          {players.map((player) => (
            <div key={player.id}>
              <h2>{player.name}</h2>
              {/* Render more player details */}
              <Link to={`/players/${player.id}`}>See Details</Link>
            </div>
          ))}
        </div>
      );
    };

export default AllPlayers