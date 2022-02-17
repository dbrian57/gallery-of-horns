import React from 'react';
import HornedBeast from './HornedBeast'
import './Main.css'
import SelectedBeast from './SelectedBeast'


class Main extends React.Component {
  render(){
 // console.log("main props: ", this.props)
    let beasts = [];
    this.props.data.forEach((item, index) => {
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

    return (
      <>
        <main>
          <div id="beasts">
            {beasts}
          </div>
        </main>
      </>
      );
    }
}

export default Main;
