import Convidado from "../model/Convidado";

export default function validarConvidado(
  convidado: Partial<Convidado>
): string[] {
  const erros: string[] = [];

  if (!convidado.nome) {
    erros.push("Nome é obrigatório");
  }
  if (!convidado.email) {
    erros.push("Email é obrigatório");
  }
  if (!convidado.possuiAcompanhantes) {
    erros.push("Possui acompanhantes é obrigatório");
  }
  if (!convidado.qtdeAcompanhantes) {
    erros.push("Quantidade de acompanhantes é obrigatório");
  }
  if (!convidado.confirmado) {
    erros.push("Confirmado é obrigatório");
  }

  return erros;
}
