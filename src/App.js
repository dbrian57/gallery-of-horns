import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import data from './data.json'
import SelectedBeast from './SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {}
    }
  }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast: beast
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

render(){
  return (
    <>
      <Header />
      <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} beast={this.state.beast}/>
      <Main data={data} handleShowModal={this.handleShowModal} ></Main>
      <Footer />
    </>
  );
}
}
export default App;
