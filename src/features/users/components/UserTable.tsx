import { Button, Card, Table } from "react-bootstrap";
import useUsers from "../hooks/useFetchUser";
import type { User } from "../types/userType";
import styles from "./UserTable.module.css";
import { useState } from "react";
import { ModalUser } from "./ModalUser";

export const UserTable = () => {
  const { users, loading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setSelectedUser(null);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.cardWrapper}>
        <Card className={styles.card}>
          {/* Logo arriba, centrado */}
          <Card.Header className={styles.cardHeader}>
            <strong>Usuarios</strong>
          </Card.Header>

          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}

          <Card.Body>
            {/* <Card.Title className="text-center">Inicio de Sesión</Card.Title> */}
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                  <th>Ver Ubicación</th>
                  <th>Ver ubi Google</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: User) => {
                  const fixedLatLima =
                    parseFloat(user.address.geo.lat) / 1000 + -12;
                  const fixedLongLima =
                    parseFloat(user.address.geo.lng) / 1000 + -77;
                  return (
                    // Crear variables temporales para latitud y longitud

                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{fixedLatLima}</td>
                      <td>{fixedLongLima}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => setSelectedUser(user)}
                        >
                          Ver Mapa
                        </Button>
                      </td>
                      <td>
                        <a
                          href={`https://maps.google.com/?q=${fixedLatLima},${fixedLongLima}&ll=${fixedLatLima},${fixedLongLima}&z=13`}
                          // href={`https://www.google.com/maps/search/?api=1&query=${fixedLatLima},${fixedLongLima}&zoom=13`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver Ubicación
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
      {selectedUser && (
        <ModalUser
          show={true}
          handleClose={handleClose}
          text={selectedUser.name}
          latitude={parseFloat(selectedUser.address.geo.lat) / 1000 - 12}
          longitude={parseFloat(selectedUser.address.geo.lng) / 1000 - 77}
        />
      )}
    </div>
  );
};
