import { use } from "react";

export default function PaginaConvite(props: any) {
  const params =  use<any>(props.params);

  return (
    <div>
      <span>{params.alias}</span>
    </div>
  );
}