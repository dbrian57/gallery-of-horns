import React from 'react';

class HornedBeast extends React.Component {
  render(){
    return (
      <>
        <h3>{this.props.title}</h3>
          <img src={this.props.imageUrl} alt="The Beast!" title="a picture of the beast" />
        <p>{this.props.description}</p>
      </>
      ); //use parenthesis for multiline arguments
    }
}

export default HornedBeast;
