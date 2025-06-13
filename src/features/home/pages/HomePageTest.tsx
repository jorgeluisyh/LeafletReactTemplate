import { useState } from "react";
import { UserPage } from "../../users/pages/UserPage";
import { ProfilePage } from "../../profiles/pages/ProfilePage";
import { MapPage } from "../../maps/pages/MapPage";
import { TeamPage } from "../../teams/pages/TeamPage";

const Sidebar = ({ onSelect }) => (
  <div style={{ width: "200px", padding: "10px", background: "#f4f4f4" }}>
    <button onClick={() => onSelect("Usuarios")}>Usuarios</button>
    <button onClick={() => onSelect("Perfiles")}>Perfiles</button>
    <button onClick={() => onSelect("Mapas")}>Mapas</button>
    <button onClick={() => onSelect("Equipos")}>Equipos</button>
  </div>
);
export const HomePageTest = () => {
  const [pantallaSeleccionada, setPantallaSeleccionada] = useState("Usuarios");

  // Función para cambiar la pantalla mostrada
  const seleccionarPantalla = (pantalla) => {
    setPantallaSeleccionada(pantalla);
  };
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar onSelect={seleccionarPantalla} />

      {/* Contenido principal */}
      <div style={{ flex: 1 }}>
        {pantallaSeleccionada === "Usuarios" && <UserPage />}
        {pantallaSeleccionada === "Perfiles" && <ProfilePage />}
        {pantallaSeleccionada === "Mapas" && <MapPage />}
        {pantallaSeleccionada === "Equipos" && <TeamPage />}
      </div>
    </div>
  );
};
