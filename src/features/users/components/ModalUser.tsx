import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MapViewer } from "./MapViewer";

interface ModalUserProps {
  text: string;
  latitude: number;
  longitude: number;
  show: boolean;
  handleClose: () => void;
}
export const ModalUser = ({
  text,
  latitude,
  longitude,
  show,
  handleClose,
}: ModalUserProps) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          Ubicación de usuario <strong>{text}</strong>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
        <p>Latitud: {latitude}</p>
        <p>Longitud: {longitude}</p>
        <MapViewer
          latitude={latitude}
          longitude={longitude}
          text={text}
        ></MapViewer>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};
