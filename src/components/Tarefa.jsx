import React, { useState, useEffect } from 'react';
import MarcarConcluido from './MarcarConcluido';
import RemoverTarefa from './RemoverTarefa';

const Tarefa = ({ tarefa, onMarcarConcluido, onRemoverTarefa }) => {
  const [concluido, setConcluido] = useState(false);

  const handleMarcarConcluido = () => {
    setConcluido(!concluido);
    onMarcarConcluido(tarefa.id, !concluido);
  };


  return (
    <div>
       
          <span style={{ textDecoration: concluido ? 'line-through' : 'none' }}>
            {tarefa.texto}
          </span>
          <MarcarConcluido
            concluido={concluido}
            onMarcarConcluido={handleMarcarConcluido}
          />
          <RemoverTarefa onRemoverTarefa={() => onRemoverTarefa(tarefa.id)} />
        
    </div>
  );
};

export default Tarefa;
