import imgBackground from "../../../assets/imgBackground.jpg";

export const HomeNavBar = () => {
  return (
    <div
      className="col-12 bg-light d-flex justify-content-between align-items-center p-3"
      style={{
        backgroundImage: `url(${imgBackground})`, //'url("https://github.com/mdo.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px", // Puedes ajustar la altura
        position: "relative",
      }}
    >
      {/* Texto centrado en el fondo */}
      <div
        className="position-absolute w-100 text-center"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          color: "rgb(255, 255, 255)",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <h2>Herramienta de Administración</h2>
      </div>
      <img
        src="https://github.com/mdo.png"
        alt="Logo"
        width="50"
        height="50"
        className="rounded-circle"
      />
      <button className="btn btn-danger">Cerrar sesión</button>
    </div>
  );
};
