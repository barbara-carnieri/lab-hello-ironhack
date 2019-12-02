import React from 'react';

const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';

class BottomComponent extends React.Component {

  render() {
   

    return (
      <div className="BottomComponent">
      <div className="cards">
      <img src={icon1} />
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
</div>
 <div className="cards">
      <img src={icon2} />
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="cards">
      <img src={icon3} />
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to component's.</p>
      </div>
      <div className="cards">
      <img src={icon4} />
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
      </div>
    );
  }
}

export default BottomComponent;