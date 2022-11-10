import styled from "styled-components"

const Opcoes = styled.ul`
    display: flex;  
`
const Opcao = styled.li`
    min-width: 120px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
`
const textOpcoes = ['CATEGORIAS', 'FAVORITOS','MINHA ESTANTE']
function OpcoesHeader (){
    return (
        <Opcoes>
          {textOpcoes.map((texto) => (
            <Opcao><p>{texto}</p></Opcao>
        ))}
        </Opcoes>
    )
}
export default OpcoesHeader
