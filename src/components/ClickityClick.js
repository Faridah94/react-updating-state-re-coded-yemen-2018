


import React from 'react';
 class ClickityClick extends React.Component {
  constructor() {
    super();
     // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }
   handleClick = () => {
<<<<<<< HEAD

=======
  
>>>>>>> 167a06e32c784ee30291f3efc07c86da7114eaa2
      this.setState({
    hasBeenClicked: true
  }, () => console.log(this.state.hasBeenClicked)) // prints true
   }
<<<<<<< HEAD

=======
   
>>>>>>> 167a06e32c784ee30291f3efc07c86da7114eaa2
   render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 export default ClickityClick;
