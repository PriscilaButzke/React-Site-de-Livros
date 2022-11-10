import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #ffff;
    padding: 5px;
    display: flex;
    justify-content: space-around;
`
function Header() {
    return (
        <div>
            <HeaderContainer>
                <Logo />
                <OpcoesHeader />
                <IconesHeader />
            </HeaderContainer>
        </div>
    )
}
export default Header