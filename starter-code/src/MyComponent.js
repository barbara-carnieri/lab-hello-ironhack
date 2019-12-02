import React from 'react';

const logo = '/images/ironhack-logo.svg';
const menu = '/images/menu-top.svg';

class MyComponent extends React.Component {

  render() {
    console.log(this.props);

    return (
      <div className="MyComponent">
      <div className="nav-images">
      <img src={logo} />
      <img src={menu} />
      </div>
        <h1>Say hello to<br></br>ReactJS</h1>
        <p>You will learn a Frontend<br></br>framework from scratch, to<br></br>become a Ninka Developer.
        </p>
        <button>
          Awesome!
        </button>
      </div>
    );
  }
}

export default MyComponent;