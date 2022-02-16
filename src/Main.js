import React from 'react';
import HornedBeast from './HornedBeast'
import './Main.css'


class Main extends React.Component {
  render(){

    let beasts = [];
    this.props.data.forEach(item => {
      beasts.push(
        <HornedBeast
          name={item.keyword}
          image_url={item.image_url}
          />
      )
    } )

    return (
      <main>
        <div id="beasts">
          {beasts}
        </div>
      </main>
      ); //use parenthesis for multiline arguments
    }
}

export default Main;
