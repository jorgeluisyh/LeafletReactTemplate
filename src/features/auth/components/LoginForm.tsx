import { useState, type FormEvent } from "react";
import styles from "./LoginForm.module.css";
import logoSedapal from "../../../assets/logoSedapal.png";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
    navigate("/users");
    throw new Error("Function not implemented.");
  }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.cardWrapper}>
        <Card className={styles.card}>
          {/* Logo arriba, centrado */}
          <Card.Header className={styles.cardHeader}>
            <img src={logoSedapal} alt="Logo Sedapal" className={styles.logo} />
          </Card.Header>

          <Card.Body>
            <Card.Title className="text-center">Inicio de Sesión</Card.Title>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-person"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Usuario"
                  aria-label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  <i className="bi bi-lock"></i>
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="No cerrar sesión"
              />
              <Button className={styles.customButton} type="submit">
                Iniciar Sesión
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
