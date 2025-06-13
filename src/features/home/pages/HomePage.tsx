import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { UserPage } from "../../users/pages/UserPage";
import { ProfilePage } from "../../profiles/pages/ProfilePage";
import { MapPage } from "../../maps/pages/MapPage";
import { TeamPage } from "../../teams/pages/TeamPage";
import { HomeNavBar } from "../components/HomeNavBar";

export const HomePage = () => {
  const [pantallaSeleccionada, setPantallaSeleccionada] = useState("Usuarios");

  // Función para cambiar la pantalla mostrada
  const seleccionarPantalla = (pantalla: string) => {
    setPantallaSeleccionada(pantalla);
  };

  return (
    // Contenedor principal
    <>
      <HomeNavBar></HomeNavBar>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar onSelect={seleccionarPantalla}></SideBar>
        <div style={{ marginLeft: "50px", padding: "20px", flex: 1 }}>
          {pantallaSeleccionada === "Usuarios" && <UserPage />}
          {pantallaSeleccionada === "Perfiles" && <ProfilePage />}
          {pantallaSeleccionada === "Mapas" && <MapPage />}
          {pantallaSeleccionada === "Equipos" && <TeamPage />}
        </div>
      </div>
    </>
  );
};
