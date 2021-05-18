import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import InputMask from "react-input-mask";
function Modale() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaUserEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-info text-white" closeButton>
          <Modal.Title>Alterar Dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="column mb-2">
            <label>Tipo de pessoas</label>
            <select
              className="form-control"
              aria-label="Default select example"
            >
              <option selected>Tipo de Pessoa</option>
              <option value="fisica">Pessoa Física</option>
              <option value="juridica">Pessoa juridica</option>
            </select>
            <label>Tipo de Cliente</label>
            <select
              className="form-control"
              aria-label="Default select example"
            >
              <option selected>Tipo de Cliente</option>
              <option value="Cliente">Cliente</option>
              <option value="Fornecedor">Fornecedor</option>
            </select>
          </div>
          <div className="column mb-2">
            <label>CPF/CNPJ</label>
            <input type="text" className="form-control " />
            <label>Nome</label>
            <input type="text" className="form-control " />
          </div>
          <div className="column mb-2">
            <label>Contato</label>
            <InputMask
              mask="(99)99999-9999"
              type="tel"
              className="form-control"
            />
            <label>CEP</label>
            <InputMask mask="99999-999" type="text" className="form-control" />
          </div>
          <div className="column mb-2">
            <label>Bairro</label>
            <input type="text" className="form-control" />

            <label>Número</label>
            <input type="number" className="form-control" />
          </div>
          <label>Email</label>
          <input type="email" className="form-control" />
        </Modal.Body>
        <Modal.Footer className="bg-info ">
          <Button variant="danger " onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="light" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;
