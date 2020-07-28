import React from 'react';
import { Link } from 'react-router-dom';
import PageDeafault from '../../../components/PageDefault';

function CadastroCatergoria(){
    return(
        <PageDeafault>
            <h1>Cadastro de categoria</h1>

        <Link to= '/'>
            Ir para home
        </Link>

        </PageDeafault>
    )
    }
export default CadastroCatergoria;    