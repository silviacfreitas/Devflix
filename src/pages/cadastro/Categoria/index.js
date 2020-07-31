/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosEvento) {
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value,
    );
  }

  useEffect(() => {
    const URL_DATA = window.location.hostname.includes('localhost')
      ? 'http://localhost:3030/categorias'
      : 'https://tripflix-project.herokuapp.com/categorias';
    fetch(URL_DATA)
      .then(async (serverResponse) => {
        const response = await (serverResponse).json();
        setCategorias([
          ...response,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Frond End',
    //       descrição: 'LoremIpsum Frond End Javascript function array class object',
    //       cor: '#6BD1FF',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descrição: 'LoremIpsum Back End Javascript function array class object',
    //       cor: '#6BD1FF',
    //     },
    //   ]);
    // }, 1 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        { values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosEvento) {
        infosEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

        {categorias.length === 0 && (
          <div>
            Loading..
          </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
