import React from 'react';
import HornedBeast from './HornedBeast'

class Main extends React.Component {
  render(){
    return (
      <>
      <h2>The Beasts!</h2>
      <HornedBeast title="The Devil" imageUrl="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/01/Black-Phillip-from-The-Witch-2015.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" description="This is the Devil"/>

      <HornedBeast title="Demon Bear" imageUrl="https://cdn.inprnt.com/thumbs/37/19/3719102f984e79ba9dfc085eebff1712.jpg?response-cache-control=max-age=2628000" description="A bear, a single Bear"/>
      </>
      ); //use parenthesis for multiline arguments
    }
}

export default Main;
