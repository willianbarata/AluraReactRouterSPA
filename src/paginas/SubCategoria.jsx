import React from "react";
import { useParams } from "react-router-dom";
import ListaPost from "../Components/ListaPost";

const SubCategoria = () =>{
    const { subcategoria } = useParams();
    
    return(
        <ListaPost url={`/post?subcategoria=${subcategoria}`} />
    )
}

export default SubCategoria;