import React, { Component } from 'react';

// camelCase for variables and functions, 
// PascalCase for types(classes), and 
// UPPERCASE_SNAKE_CASE for constants

// Functional componenet always returns JSX
const HelloFunctionalCompenet = ({message}) => {
  // console.log(props.message);
  console.log('Destructed message is: ', {message})
  const greeting = 'Hello Function Component!';
  // alert('message')
  return ( 
    <h1 onClick={ () => { alert(message)}}>Hello Ols!!</h1>
  );
  
  // return <h1>{greeting}</h1>;
}
// Class-based component
// Contain state, lifecycle methods like startUp, shutdown, receiving events
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: 'Gerry'
    }
  }

  // Adding handleChange as a property to this class
  handleChange = (e) => {
    const newName = e.target.value

    this.setState(
      {
        name: newName
      }
    )
  }


  handlerSubmt = (e) => {
    // for a form we don't want to submit as it will refresh the page
    // or it will send the action to the action property
    // which in this case there is none, so it will try to refresg]h ther page
    e.preventDefault();
    alert(this.state.name);
  }


  render() {
    console.log('In App')
    return (
      <div className='App'>
        <HelloFunctionalCompenet message='Well Ols' />
        Hello {this.state.name}
        <form onSubmit={this.handlerSubmt}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="What's my name" />
        </form>
      </div>
    );
  }
}

export default App;
