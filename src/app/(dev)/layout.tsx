import Pagina from "@/components/template/Pagina";

export default function layout(props: any) {
  return (
    <Pagina>{props.children}</Pagina>
  )
}