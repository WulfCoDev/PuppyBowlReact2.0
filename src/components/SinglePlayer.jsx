import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSinglePlayer, deletePlayer } from '../API/ajaxHelpers';
import '../styles.css'

function SinglePlayer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);
  
    useEffect(() => {
      async function getPlayer() {
        try {
          const response = await fetchSinglePlayer(id);
          setPlayer(response.data.player); // Access the player object within the data
        } catch (error) {
          console.error('Error fetching player:', error);
        }
      }
      getPlayer();
    }, [id]);
  
    const handleDelete = async () => {
      try {
        await deletePlayer(id);
        navigate('/'); // Redirect back to AllPlayers after deletion
      } catch (error) {
        console.error('Error deleting player:', error);
      }
    };
  
    if (!player) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='single-player-card'>
        <h2>{player.name}</h2>
        <p>{player.breed}</p>
        <p>{player.status}</p>
        <p>{player.teamId}</p>
        <img src={player.imageUrl} alt={player.name} />
        
        <button onClick={handleDelete}>Delete Player</button>
      </div>
    );
  }
  
  export default SinglePlayer;
  