
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const RegistrationSuccessComponent = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    //   const toggle = () => setModal(!modal);
    const closePopop = () => {
        props.closePopop();
    }

    return (
        <div>
            {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
            <Modal show={props.isOpen} onHide={closePopop} >
                <Modal.Header>Registration Successful</Modal.Header>
                <Modal.Body>
                    Registraion successful Please login!!
                </Modal.Body>
                <Modal.Footer>
                    <Button color="primary" onClick={closePopop}>Ok</Button>{' '}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RegistrationSuccessComponent;