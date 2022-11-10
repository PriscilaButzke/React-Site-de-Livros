import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';

const AppContainer = styled.div`
.App {
  width: 100vw;
  height: 100vh;
  background-image: #bfc0bd;
}
li{
  list-style: none;
}
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
      
  );
}

export default App;
