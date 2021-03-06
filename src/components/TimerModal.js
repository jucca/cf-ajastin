import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const TimerModal = (props) => {
    return [
        <Button color="warning" onClick={props.toggle}>ASETUKSET</Button>,
        <Modal className="timer-modal-content" isOpen={props.modal} toggle={props.toggle} >
          <ModalHeader className="timer-modal-header" toggle={props.toggle}>{props.title}</ModalHeader>
          <ModalBody>
            {props.body}
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={props.save}>TALLENNA</Button>
            <Button color="secondary" onClick={props.toggle}>PERUUTA</Button>
          </ModalFooter>
        </Modal>   
    ];
}

export default TimerModal


