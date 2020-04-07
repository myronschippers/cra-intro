import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

class App extends React.Component {
  // render
  render() {
    // return
    return (
      <div>
        {/* a single wrapping element */}
        <Header />

        <Body />
      </div>
    );
  }
}

export default App;
