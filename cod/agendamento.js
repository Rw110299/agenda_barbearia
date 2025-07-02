/**
 * Valida um número de telefone (formato brasileiro com 10 ou 11 dígitos).
 * @param {string} telefone - Número de telefone informado.
 * @returns {boolean} - Retorna true se for válido.
 */
export function validarTelefone(telefone) {
  const regex = /^\d{10,11}$/; // Ex: 11999999999
  return regex.test(telefone);
}

/**
 * Valida se a data e hora do agendamento são válidas (futuras).
 * @param {string} dataHora - Data e hora no formato ISO.
 * @returns {boolean} - Retorna true se a data for no futuro.
 */
export function validarDataHora(dataHora) {
  const agendamento = new Date(dataHora);
  const agora = new Date();
  return agendamento > agora;
}

/**
 * Realiza o agendamento com base nos dados informados.
 * @param {string} nome - Nome do cliente.
 * @param {string} telefone - Telefone do cliente.
 * @param {string} dataHora - Data e hora do agendamento.
 * @returns {string} - Mensagem de sucesso ou erro.
 */
export function agendarHorario(nome, telefone, dataHora) {
  if (!nome || nome.trim().length < 3) {
    return 'Nome inválido.';
  }

  if (!validarTelefone(telefone)) {
    return 'Telefone inválido.';
  }

  if (!validarDataHora(dataHora)) {
    return 'Data e hora inválidas.';
  }

  // Aqui poderia ser feito o envio para backend/API
  return 'Agendamento realizado com sucesso!';
}
