import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { fetchPlayers } from "../API/ajaxHelpers";
import '../styles.css'
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
        <div className="all-players">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <h2>{player.name}</h2>
              <img src={player.imageUrl} alt={player.name} />
              <h3>{player.status}</h3>

              <Link className="see-details-link" to={`/players/${player.id}`}>See Details</Link>
            </div>
          ))}
        </div>
      );
    };

export default AllPlayers