import React, { useEffect, useState } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css';
import ListaCategorias from '../Components/ListaCategorias';
import ListaPost from '../Components/ListaPost';

const Categoria = () => {
    const { id } = useParams();
    const { path } = useRouteMatch();
    const [ subCategorias, setSubCategorias ] = useState([]);
    
    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria)=>{
            setSubCategorias(categoria.subCategorias)
        })
    }, [])
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
        <ListaCategorias/>
        <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        </>
    )
}

export default Categoria;