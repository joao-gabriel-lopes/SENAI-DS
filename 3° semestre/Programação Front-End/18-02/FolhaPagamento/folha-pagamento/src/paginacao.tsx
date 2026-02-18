import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import { CardContent, CardMedia } from '@mui/material';
import './App.css'

interface IFuncionario {
  nome: String,
  urlFoto: String,
  tipo: String,
  pagamento: Number
}

function Paginacao() {

  const [lista, setLista] = useState<IFuncionario[]>([]);

  const [numeroFuncionario, setNumeroFuncionario] = useState(0);

  async function CarregarDados() {
    const resposta = await fetch('http://apisenai.runasp.net/funcionarios/');
    const dados = await resposta.json();
    setLista(dados);
  }

  useEffect(() => { CarregarDados() }, []);

  function Anterior() {
    if (numeroFuncionario > 0) {
      setNumeroFuncionario(numeroFuncionario - 1);
    } else {
      let ultimoFuncionario = lista.length - 1;
      setNumeroFuncionario(ultimoFuncionario);
    }
  }

  function Proximo() {
    let ultimoFuncionario = lista.length - 1;
    if (numeroFuncionario < ultimoFuncionario) {
      setNumeroFuncionario(numeroFuncionario + 1);
    } else {
      setNumeroFuncionario(0);
    }
  }

  function FuncionarioCard(funcionario: IFuncionario) {
    return (
      <Card className='card'>
        <CardContent className='conteudo-card'>
          <CardMedia
            className='img-card'
            component="img"
            height="200"
            image={funcionario?.urlFoto.toString()}
            alt="Perfil"
          />
          <p className='titulo-card'>{funcionario?.nome}</p>
          <p className='texto-card'>Pagamento: {funcionario?.pagamento?.toString()}</p>
          <p className='texto-card'>Tipo: {funcionario?.tipo}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <h1 className='titulo'>Funcionários</h1>
      <div className='container'>
        {FuncionarioCard(lista[numeroFuncionario])}
      </div>
      <div className='botoes-container'>
        <button
          onClick={
            () => Anterior()
          }>
          Anterior
        </button>
        <button
          onClick={
            () => Proximo()
          }>
          Próximo
        </button>
      </div>
    </>
  )
}

export default Paginacao
