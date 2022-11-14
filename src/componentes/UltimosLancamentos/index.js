import styled from 'styled-components'
import CardRecomenda from '../CardRecomenda'
import { Titulo } from '../Titulo'
import livro from '../../imagens/livro2.png'
import {livros}  from './dados'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#FA1616"
                tamanhoFonte="36px"
                alinhamento="center">
                ÚLTIMOS LANCAMENTOS</Titulo>
                <NovosLivrosContainer>
                {livros.map(livro => (
                    <img alt='capa do livro' src={livro.src} />
                ))}
            </NovosLivrosContainer>
            
            <CardRecomenda
                titulo="Talvez você se interesse por ..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação integrada com a plataforma Google."
                img={livro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos