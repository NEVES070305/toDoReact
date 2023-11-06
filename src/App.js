import React, { useState, useEffect } from "react";
import Tarefa from "./components/Tarefa";
import AdicionarTarefa from "./components/AdicionarTarefa";

function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const local = localStorage.getItem("tarefas");
    const tarefasSalvas = JSON.parse(local);
    if (tarefasSalvas) {
      setTarefas(tarefasSalvas);
    }
  }, []);

  const marcarConcluido = (id, concluido) => {
    const updatedTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluido: !tarefa.concluido };
      }
      return tarefa;
    });
    setTarefas(updatedTarefas);

    // Salvar as tarefas atualizadas no localStorage
    localStorage.setItem("tarefas", JSON.stringify(updatedTarefas));
  };

  const removerTarefa = (id) => {
    const updatedTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(updatedTarefas);

    // Salvar as tarefas atualizadas no localStorage
    localStorage.setItem("tarefas", JSON.stringify(updatedTarefas));
  };

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: tarefas.length + 1,
      texto,
      concluido: false,
    };

    const novasTarefas = [...tarefas, novaTarefa];
    setTarefas(novasTarefas);

    // Salvar as tarefas atualizadas no localStorage
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <AdicionarTarefa onAdicionarTarefa={adicionarTarefa} />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <Tarefa
              tarefa={tarefa}
              onMarcarConcluido={marcarConcluido}
              onRemoverTarefa={removerTarefa}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
  