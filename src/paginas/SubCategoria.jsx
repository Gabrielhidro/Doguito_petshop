import { useParams } from "react-router-dom";
import ListaPost from "../components/ListaPost";

export default function SubCategoria(){

const { subcategoria } = useParams()

    return (
        <ListaPost url={`/posts?subcategoria=${subcategoria}`}/>
    )
}