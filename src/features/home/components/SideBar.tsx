import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <Offcanvas show={sidebarOpen} onHide={toggleSidebar} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menú</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Item>
            <Link to="/" className="nav-link" onClick={toggleSidebar}>
              Inicio
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/profile" className="nav-link" onClick={toggleSidebar}>
              Perfil
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/settings" className="nav-link" onClick={toggleSidebar}>
              Configuración
            </Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
