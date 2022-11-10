import logo from'../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 8px;
`
const P = styled.p`
    padding-top: 20px;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo'/>
            <P><strong>My Book</strong></P>
        </LogoContainer>
    )
}
export default Logo