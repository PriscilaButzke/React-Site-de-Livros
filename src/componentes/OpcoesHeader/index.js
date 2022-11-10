import styled from "styled-components"

const Opcoes = styled.ul`
    display: flex;  
    padding-top: 18px;
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
const textOpcoes = ['Categorias', 'Favotitos','Minha estante']
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
