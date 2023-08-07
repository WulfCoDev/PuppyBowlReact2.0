import React, { useState } from 'react';
import { createPlayer } from '../API/ajaxHelpers'; // Update with appropriate API functions

function NewPlayerForm() {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    age: '',
    breed: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleCreatePlayer = async () => {
    try {
      await createPlayer(newPlayer);
      // Handle successful creation (e.g., show success message, clear form)
      setNewPlayer({
        name: '',
        imageUrl: '',
        breed: '',
      });
    } catch (error) {
      console.error('Error creating player:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className='new-player-form'>
      <h2>Create New Player</h2>
      <input
        type="text"
        name="name"
        placeholder="Player Name"
        value={newPlayer.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Player Image URL"
        value={newPlayer.imageUrl}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="breed"
        placeholder="Player Breed"
        value={newPlayer.breed}
        onChange={handleInputChange}
      />
      <button onClick={handleCreatePlayer}>Create Player</button>
    </div>
  );
}

export default NewPlayerForm;