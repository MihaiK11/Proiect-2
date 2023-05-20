import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="scroll-layout">
        <h2>Primul layout</h2>
        <p>Textul pentru primul layout</p>
        <div className="images-container">
          <img src={require('./images/image1.jpg')} alt="Imagine 1" />
          <img src={require('./images/image2.jpg')} alt="Imagine 2" />
          <img src={require('./images/image3.jpg')} alt="Imagine 3" />
        </div>
      </div>

      <div className="scroll-layout">
        <h2>Al doilea layout</h2>
        <p>Textul pentru al doilea layout</p>
        <div className="images-container">
          <img src={require('./images/image4.jpg')} alt="Imagine 4" />
          <img src={require('./images/image5.jpg')} alt="Imagine 5" />
          <img src={require('./images/image6.jpg')} alt="Imagine 6" />
        </div>
      </div>

      <div className="scroll-layout">
        <h2>Al treilea layout</h2>
        <p>Textul pentru al treilea layout</p>
        <div className="images-container">
          <img src={require('./images/image7.jpg')} alt="Imagine 7" />
          <img src={require('./images/image8.jpg')} alt="Imagine 8" />
          <img src={require('./images/image9.jpg')} alt="Imagine 9" />
        </div>
      </div>

      <div className="scroll-layout">
        <h2>Al patrulea layout</h2>
        <p>Textul pentru al patrulea layout</p>
        <div className="images-container">
          <img src={require('./images/image10.jpg')} alt="Imagine 10" />
          <img src={require('./images/image11.jpg')} alt="Imagine 11" />
          <img src={require('./images/image12.jpg')} alt="Imagine 12" />
        </div>
      </div>
    </div>
  );
}

export default App;
