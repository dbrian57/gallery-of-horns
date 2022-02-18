import React from 'react';
import HornedBeast from './HornedBeast'
import './Main.css'
import Form from 'react-bootstrap/Form';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  render(){
  console.log("main props: ", this.props)
    let beasts = [];
    this.state.data.forEach((item, index) => {
      beasts.push(
        <HornedBeast
          key={index}
          name={item.title}
          image_url={item.image_url}
          description={item.description}
          beast={item}
          handleShowModal={this.props.handleShowModal}
          />
      )
    } )


    let handleSelect = (event) => {
      let filteredBeasts = this.props.data;
      let selected = +event.target.value;

      
      if (selected === 1){
        filteredBeasts = this.props.data.filter((beast, index) => beast.horns === 1);
        console.log(filteredBeasts); 
      }

      if (selected === 2){
        filteredBeasts = this.props.data.filter((beast, index) => beast.horns === 2);
        console.log(filteredBeasts); 
      }

      if (selected === 3){
        filteredBeasts = this.props.data.filter((beast, index) => beast.horns === 3);
        console.log(filteredBeasts); 
      }

      if (selected === 100){
        filteredBeasts = this.props.data.filter((beast, index) => beast.horns === 100);
        console.log(filteredBeasts); 
      }
      this.setState({ data: filteredBeasts })
    }
    
    return (
      <>
        <main>
          <p id="woop">Woop! Woop! Select your Beast type!</p>
        <Form>
          <Form.Select onChange={handleSelect}>
            <option value="all">All</option>
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="100">100 horns</option>
          </Form.Select>

        </Form>
          <div id="beasts">
            {beasts}
          </div>
        </main>
      </>
      );
    }
}

export default Main;
