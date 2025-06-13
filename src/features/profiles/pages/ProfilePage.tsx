import React from "react";

export const ProfilePage = () => {
  return (
    <div className="container mt-5">
      <h2>Tabla de Perfiles</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del Perfil</th>
            <th scope="col">Área</th>
            <th scope="col">Activo</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Administrador</td>
            <td>Sistemas</td>
            <td>
              <span className="badge bg-success">Activo</span>
            </td>
            <td>
              <button className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Editor</td>
            <td>Contenido</td>
            <td>
              <span className="badge bg-warning">Inactivo</span>
            </td>
            <td>
              <button className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Moderador</td>
            <td>Soporte</td>
            <td>
              <span className="badge bg-success">Activo</span>
            </td>
            <td>
              <button className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
