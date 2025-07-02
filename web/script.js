// Importa funções reutilizáveis (você precisa rodar em servidor local para funcionar)
import { agendarHorario } from '../cod/agendamento.js';

// Espera o DOM carregar para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-agendamento');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.elements[0].value;
    const telefone = form.elements[1].value;
    const dataHora = form.elements[2].value;

    const resultado = agendarHorario(nome, telefone, dataHora);

    alert(resultado);

    if (resultado === 'Agendamento realizado com sucesso!') {
      form.reset(); // Limpa o formulário
    }
  });
});
