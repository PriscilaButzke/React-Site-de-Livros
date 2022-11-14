import styled from "styled-components"
import { Titulo } from "../Titulo"
import Button from 'react-bootstrap/Button';


const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 30px auto;
    max-width: 800px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #FA1616;
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
`

function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="25px" cor="#0D4C92" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Button variant="danger" className="btn-lg d-block text-center rounded p-2 ms-4 mt-2" >Saiba Mais</Button>
            </div>
        </Card>  
    )
}

export default CardRecomenda