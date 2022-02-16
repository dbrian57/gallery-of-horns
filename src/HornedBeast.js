import React from 'react';
import './HornedBeast.css'
// import Card from 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

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
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              <button onClick={this.handleVotes}>Vote</button>
              <table>
                <tr>
                  <td>Number of votes:</td>
                  <td id="votes">{this.state.votes}</td>
                </tr>
              </table>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
      ); //use parenthesis for multiline arguments
    }
}

export default HornedBeast;


/*
<div class="single-beast">
  <img src={this.props.image_url} alt="The Beast!" title="a picture of the beast" />
  <h2>{this.props.name}</h2>
  <button onClick={this.handleVotes}>Vote</button>
  <table>
  <tr>
    <td>Number of votes:</td>
    <td id="votes">{this.state.votes}</td>
  </tr>
  </table>
</div>
*/
