import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class modal extends Component {
    state = {
        isOpen: false,
    };

    openModal = () => this.setState({ isOpen: true });

    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.openModal}>
                    {' '}
                    Add Review{' '}
                </Button>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <textarea placeholder="type your review"></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.closeModal}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default modal;
