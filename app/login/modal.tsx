import { Modal, Button, Form } from 'react-bootstrap';

interface ModalProps {
    onClose: () => void;
    show: boolean;
}

function ModalForgetPassword({ onClose, show }: ModalProps) {
  return (
    <>
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
              <Modal.Title>Esqueci minha senha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p>Para redefinir sua senha, digite seu e-mail abaixo e clique em "Enviar".</p> 

              <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email_recuperacao"
                  placeholder="nome@example.com"
                  autoFocus
                />
              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={onClose}> Fechar </Button>
              <Button variant="primary" onClick={onClose}> Enviar </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default ModalForgetPassword;