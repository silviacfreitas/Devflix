/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
// import useForm from '../../../hooks/useForm';
import '../styles.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  // const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosEvento) {
    setValue(
      infosEvento.target.getAttibute('name'),
      infosEvento.target.value,
    );
  }

  useEffect(() => {
    // const URL_DATA = window.location.hostname.includes('localhost')
    //   ? 'http://localhost:3030/categorias'
    //   : 'https://tripflix-project.herokuapp.com/categorias';
    const URL_DATA = 'http://localhost:3030/categorias';
    fetch(URL_DATA)
      .then(async (serverResponse) => {
        const response = await (serverResponse).json();
        setCategorias([
          ...response,
        ]);
      });
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
        // clearForm();
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

        <footer id="form_footer">
          <Button className="cadastrar">
            Cadastrar
          </Button>

          <Link className="home" to="/">
            Ir para Home
          </Link>
        </footer>

        {categorias.length === 0 && (
          <div>
            Loading..
          </div>
        )}

        <ul className="categorias_formulario">
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`} style={{ background: `${categoria.cor}` }}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
      </form>

    </PageDefault>
  );
}

export default CadastroCategoria;
