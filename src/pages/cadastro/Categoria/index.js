import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria () {
    const [categorias, setCategorias] = useState([]);
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    };
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        });
    }

    // function handleChange(infosEvento){
    //     const { getAttribute, value } = infosEvento.target;
    //     setValue(
    //         getAttribute('name'), 
    //         value
    //     );
    // }

    function handleChange(infosEvento){  
        setValue(
            infosEvento.target.getAttribute('name'), 
            infosEvento.target.value
        );
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(infosEvento){
                infosEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);
            }}>

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

                <button>
                    Cadastrar
                </button>

                <ul>
                    {categorias.map((categoria, indice) => {
                        return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                        )
                    })}
                </ul>
            </form>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
  }

  export default CadastroCategoria;