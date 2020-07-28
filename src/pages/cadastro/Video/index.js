import React from 'react';
import { Link } from 'react-router-dom';
import PageDeafault from '../../../components/PageDefault';

function CadastroVideo(){
    return(
        <PageDeafault>
            <h1>Cadastro de Vídeo</h1>

        <Link to= '/cadastro/categoria'>
            Cadastrar categoria        
        </Link>

        </PageDeafault>
    )
    }
export default CadastroVideo;    