import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'



const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
  
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
    margin-top: 32px;
    flex-wrap: wrap; 
   
`
const LivroCard = styled.div`
    width: 280px;
    background-color: #F8F3EB;
    color: #212121;
    text-align: center;
    padding: 32px;
    border-radius: 20px;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 1 );
`

//textoDigitado é o nome do evento
//useStage é um valor, pode ser o texto digitado, um boolean, qualquer coisa, então dentro do () se coloca o que é exemplo '' []
function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value

                    //onBlur é um evento, serve para capturar o momento em que o usuario digita algo no campo e clica pra fora do componente
                    //target.value pega o valor digitado no evento
                    //include: verifica se dentro daquele item da lista, está incluido o texto digitado
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <Resultado>
                {livrosPesquisados.map(livro => (

                    <LivroCard>
                        <img src={livro.src} />
                        <p>{livro.nome}</p>
                    </LivroCard>
                ))}
            </Resultado>


        </PesquisaContainer>
    )
}

export default Pesquisa
