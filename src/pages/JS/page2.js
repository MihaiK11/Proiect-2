import React from "react";
import '../CSS/page2.css';

function Page2(){
    return (
        <div className="Page2">
            <div className="title">
                <h1>Book your time</h1>
            </div>
            <div className="paginaServiciu">
                <div className="slideShow">
                    <img src={require('../../images/frizerie1.jpg')} alt="Frizerie"></img>
                    <img src={require('../../images/frizerie1.jpg')} alt="Frizerie"></img>
                    <img src={require('../../images/frizerie1.jpg')} alt="Frizerie"></img>
                </div>
                <div className="info">
                    <div className="companyName">Nume companiei:</div>
                    <div className="street">Strada:</div>
                    <div className="Contacts">Contacte:</div>
                    <div className="Price">Pret:</div>
                </div>
                <div className="depunereCerere">
                    <a href="/depunere"><h2>Depunere</h2></a>
                </div>
            </div>
        </div>
    );
}
export default Page2