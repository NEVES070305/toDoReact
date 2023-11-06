import React from 'react';

const RemoverTarefa = ({ onRemoverTarefa }) => {
  return (
    <button onClick={onRemoverTarefa}>Remover Tarefa</button>
  );
};

export default RemoverTarefa;
