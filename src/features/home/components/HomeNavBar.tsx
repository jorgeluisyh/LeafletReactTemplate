import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoSedapal from "../../../assets/logoSedapal.png";
import { Button } from "react-bootstrap";

export const HomeNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Button variant="outline-light" onClick={() => console.log("hola")}>
          ☰
        </Button>
        <Navbar.Brand href="#home">Herramienta de Administración</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
