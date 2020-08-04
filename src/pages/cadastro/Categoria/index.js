import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDeafault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCatergoria() {
  const valoresIniciais = {
    nome: ' ',
    descricao: ' ',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave = nome,descricao,cor
    setValues({
      ...values,
      [chave]: valor, // nome : 'valor'
    })
  }
  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
      );
    }
    useEffect(() =>{
      const URL_TOP = 'https://zancaflix.herokuapp.com/catergorias';

      fetch(URL_TOP)
        .then(async (respostaDoServidor) =>{
          const resposta = await respostaDoServidor.json();
          setCategorias([
            ...resposta,
          ]);
        });
      },[]);

  return (
    <PageDeafault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}

      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descricao: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
        
        {categorias.length === 0 &&(
          <div>
          Loading...
          </div>
        )}

      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>

    </PageDeafault>
  );
}
export default CadastroCatergoria;
