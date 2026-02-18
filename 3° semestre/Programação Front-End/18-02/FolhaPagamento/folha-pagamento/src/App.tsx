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

function App() {

  const [lista, setLista] = useState<IFuncionario[]>([]);

  async function CarregarDados() {
    const resposta = await fetch('http://apisenai.runasp.net/funcionarios/');
    const dados = await resposta.json();
    setLista(dados);
  }

  useEffect(() => { CarregarDados() }, []);

  function FuncionarioCard(funcionario: IFuncionario, index: number) {
    return(      
      <Card key={index} className='card'>
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
        {lista.map((funcionario, index) => (
          FuncionarioCard(funcionario, index)
        ))}
      </div>
    </>
  )
}

export default App
