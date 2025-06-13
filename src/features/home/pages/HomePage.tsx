import { Collapse } from "react-bootstrap";
import { useState } from "react";

export const HomePage = () => {
  const [submenu1Open, setSubmenu1Open] = useState(false);
  const [submenu2Open, setSubmenu2Open] = useState(false);
  const [submenu3Open, setSubmenu3Open] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setSubmenu1Open(!submenu1Open)}
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-people"></i>
                  <span className="ms-1 d-none d-sm-inline">
                    Gestión de Usuarios
                  </span>
                </a>
                <Collapse in={submenu1Open}>
                  <ul className="collapse show nav flex-column ms-1">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">
                          Administrar Usuarios
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">
                          Administrar Perfiles
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">
                          Administrar Mapas
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">
                          Administrar Equipos
                        </span>{" "}
                      </a>
                    </li>
                  </ul>
                </Collapse>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setSubmenu2Open(!submenu2Open)}
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-map"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Gestión de Servicios
                  </span>
                </a>
                <Collapse in={submenu2Open}>
                  <ul className="collapse nav flex-column ms-1">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">
                          Administrar Servicios ArcGis Server
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">
                          Administrar Servicios WMS
                        </span>
                        2
                      </a>
                    </li>
                  </ul>
                </Collapse>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setSubmenu3Open(!submenu3Open)}
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-clock-history"></i>
                  <span className="ms-1 d-none d-sm-inline">Históricos</span>
                </a>
                <Collapse in={submenu3Open}>
                  <ul className="collapse nav flex-column ms-1">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">
                          Administrar Históricos
                        </span>
                      </a>
                    </li>
                  </ul>
                </Collapse>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">loser</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-light text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col py-3">
          <h3>Left Sidebar with Submenus</h3>
          <p className="lead">
            An example 2-level sidebar with collapsible menu items. The menu
            functions like an "accordion" where only a single menu is open at a
            time.
          </p>
        </div>
      </div>
    </div>
  );
};
