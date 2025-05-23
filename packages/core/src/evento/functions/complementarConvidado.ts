import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(
  convidadoParcial: Partial<Convidado>
): Convidado {
  const erros = validarConvidado(convidadoParcial);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const qtdeAcompanhantes = convidadoParcial.qtdeAcompanhantes ?? 0;
  const temAcompanhantes =
    convidadoParcial.possuiAcompanhantes &&
    convidadoParcial.confirmado &&
    qtdeAcompanhantes > 0;

  const convidadoAtualizado = {
    ...convidadoParcial,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
  } as Convidado;

  return convidadoAtualizado;
}
