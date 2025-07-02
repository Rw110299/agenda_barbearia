import { validarTelefone, validarDataHora, agendarHorario } from '../cod/agendamento.js';

describe('Validação de Telefone', () => {
  test('telefone válido', () => {
    expect(validarTelefone('11999999999')).toBe(true);
  });

  test('telefone inválido', () => {
    expect(validarTelefone('123')).toBe(false);
  });
});

describe('Validação de Data/Hora', () => {
  test('data futura válida', () => {
    const futuro = new Date(Date.now() + 3600000).toISOString(); // 1 hora à frente
    expect(validarDataHora(futuro)).toBe(true);
  });

  test('data passada inválida', () => {
    const passado = new Date(Date.now() - 3600000).toISOString(); // 1 hora atrás
    expect(validarDataHora(passado)).toBe(false);
  });
});

describe('Agendamento', () => {
  test('com dados válidos', () => {
    const futuro = new Date(Date.now() + 3600000).toISOString();
    expect(agendarHorario('João', '11999999999', futuro)).toBe('Agendamento realizado com sucesso!');
  });

  test('com nome inválido', () => {
    const futuro = new Date(Date.now() + 3600000).toISOString();
    expect(agendarHorario('', '11999999999', futuro)).toBe('Nome inválido.');
  });

  test('com telefone inválido', () => {
    const futuro = new Date(Date.now() + 3600000).toISOString();
    expect(agendarHorario('João', '123', futuro)).toBe('Telefone inválido.');
  });

  test('com data inválida', () => {
    const passado = new Date(Date.now() - 3600000).toISOString();
    expect(agendarHorario('João', '11999999999', passado)).toBe('Data e hora inválidas.');
  });
});
