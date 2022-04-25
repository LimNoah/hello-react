// import React from "react";
import React, { Component } from 'react';

// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import EventPracticeFunctionComponent from "./EventPracticeFunctionComponent"
// import ValidationSample from "./ValidationSample";
import ScrollBox from './ScrollBox';

// const App = () => {
//   // return <MyComponent>React</MyComponent>;
//   // return <Counter />;
//   // return <Say />;
//   // return <EventPractice />;
//   // return <EventPracticeFunctionComponent />
//   return <ValidationSample />
// };

class App extends Component {
  render() { 
    // return <ValidationSample />
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
      
    );
  }
}
 
export default App;