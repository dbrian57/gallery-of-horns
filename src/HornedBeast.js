import React from 'react';
import './HornedBeast.css'
// import Card from 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render(){
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={() => this.props.handleShowModal(this.props.beast)} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <button onClick={this.handleVotes}>Vote</button>
            <Card.Text>



                  Number of votes: {this.state.votes}


            </Card.Text>
          </Card.Body>
        </Card>
      </>
      ); //use parenthesis for multiline arguments
    }
}

export default HornedBeast;
