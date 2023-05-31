import './App.css';

function App() {
    return (
        <div className="App">
            <div className="title">
                <h1>Book your time</h1>
                <br />
                <br />
                <br />
                <br />
            </div>
            <hr className="line" />
            <div className="scroll-layout">
                <h2>Frizerie</h2>
                <p>Frizerie: 9:00-20:00</p>
                <a href='/page2'>
                    <div className="images-container">
                        <img src={require('./images/frizerie1.jpg')} alt="Imagine 1" />
                        <img src={require('./images/image2.jpg')} alt="Imagine 2" />
                        <img src={require('./images/image3.jpg')} alt="Imagine 3" />
                    </div>
                </a>

            </div>
            <hr className="line" />
            <div className="scroll-layout">
                <h2>Salon de frumusete:</h2>
                <p>10:00-17:00</p>
                <a href='/page2'>
                    <div className="images-container">
                        <img src={require('./images/image4.jpg')} alt="Imagine 4" />
                        <img src={require('./images/image5.jpg')} alt="Imagine 5" />
                        <img src={require('./images/image6.jpg')} alt="Imagine 6" />
                    </div>
                </a>
            </div>
            <hr className="line" />
            <div className="scroll-layout">
                <h2>Carting : </h2>
                <p>9:00-19:00</p>
                <a href='/page2'>
                    <div className="images-container">
                        <img src={require('./images/image7.jpg')} alt="Imagine 7" />
                        <img src={require('./images/image8.jpg')} alt="Imagine 8" />
                        <img src={require('./images/image9.jpg')} alt="Imagine 9" />
                    </div>
                </a>
            </div>
            <hr className="line" />
            <div className="scroll-layout">
                <h2>Carwash</h2>
                <p>Carwash : 24/7</p>
                <a href='/page2'>
                    <div className="images-container">
                        <img src={require('./images/image10.jpg')} alt="Imagine 10" />
                        <img src={require('./images/image11.jpg')} alt="Imagine 11" />
                        <img src={require('./images/image12.jpg')} alt="Imagine 12" />
                    </div>
                </a>
            </div>
            <hr className="line" />
        </div>

    );
}

export default App;
