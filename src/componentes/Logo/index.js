import logo from'../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 8px;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo'/>
            <p><strong>My Book</strong></p>
        </LogoContainer>
    )
}
export default Logo