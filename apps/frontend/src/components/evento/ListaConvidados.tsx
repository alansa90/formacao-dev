import { Convidado } from "core/evento"
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadosProps {
  convidados: Convidado[];
}
export default function ListaConvidados(props: ListaConvidadosProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.convidados.map((convidado) => (
          <ConvidadoItem key={convidado.id} convidado={convidado} />
        ))}
      </ul>
    </div>
  );
}