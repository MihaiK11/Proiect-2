import './App.css';

function App() {
  return (
    <div className="App">
        <div className="title">
            <h1>Book your time</h1>
        </div>
        <div className="paginaServiciu">
            <div className="slideShow">
                <img src={require('./imagines/frizerie.jpg')} alt="Description of the image"></img>
                <img src={require('./imagines/frizerie.jpg')} alt="Description of the image"></img>
                <img src={require('./imagines/frizerie.jpg')} alt="Description of the image"></img>
            </div>
            <div className="info">
                <a href="hz.com"><div className="companyName">Nume companiei:</div></a>
                <div className="street">Strada:</div>
                <div className="Contacts">Contacte:</div>
                <div className="Price">Pret:</div>
            </div>
            <div className="depunereCerere">
                <h2>Depunere</h2>
            </div>
        </div>
    </div>
  );
}

export default App;
