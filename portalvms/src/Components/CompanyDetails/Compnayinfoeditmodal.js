import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Compnayinfoeditmodal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        props.setShowAddModal(false)
    };
    const handleShow = () => setShow(true);
    console.log("openModalById",props.openModalById)

    return (
        <div>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={props.showAddModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:"maroon"}}>
                        {props.openModalById == 1 ? "Primary Information" : props.openModalById == 2 ? "Primary Contact Information" : props.openModalById == 3 ? "Primary Addresss Information" : ""}
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default Compnayinfoeditmodal