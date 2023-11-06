import React, { useState } from 'react';

const AdicionarTarefa = ({ onAdicionarTarefa }) => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      onAdicionarTarefa(novaTarefa);
      setNovaTarefa('');
    }
  };
  return (
    <div>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAdicionarTarefa}>Adicionar Tarefa</button>
    </div>
  );
};

export default AdicionarTarefa;
