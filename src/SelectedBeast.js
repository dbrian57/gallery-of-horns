import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render(){
   console.log("selected beast props: ", this.props)
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.beast.image_url} />
            <p>{this.props.beast.description}</p>
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
      );
    }
  }

export default SelectedBeast;
