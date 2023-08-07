import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { fetchPlayers } from "../API/ajaxHelpers";
import '../styles.css'
const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const response = await fetchPlayers();
            const playersData = response.data.players;
      setPlayers(playersData);
    }
    getPlayers();
  }, []);

  useEffect(() => {
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [searchQuery, players]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search players..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="all-players">
        {filteredPlayers.map((player) => (
          <div className="player-card" key={player.id}>
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={player.name} />
            <h3>{player.status}</h3>
            <Link className="see-details-link" to={`/players/${player.id}`}>
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPlayers;