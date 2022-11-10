import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function Pesquisa2() {

    return (
        <Navbar  >
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Qual livro você busca?"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="danger" className='text-dark fs-4'>Pesquisar</Button>
                    </Form>
        </Navbar>
    );
}
export default Pesquisa2