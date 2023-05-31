import React from "react";
import '../CSS/depunere.css';

function Depunere(){
    return (
        <div className="Depunere">
            <header>
                <h1>Depunere cerere</h1>
            </header>

            <div className="formular">
                <section className="form-section">
                    <div className="form-row">
                        <label htmlFor="Nume">Nume:</label>
                        <input type="text" id="Nume" name="Nume" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="Prenume">Prenume:</label>
                        <input type="text" id="Prenume" name="Prenume" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="NrTelefon">Nr. Telefon:</label>
                        <input type="tel" id="NrTelefon" name="NrTelefon" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="TipServiciu">Tip Serviciu:</label>
                        <input type="text" id="TipServiciu" name="TipServiciu" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="Data">Data programarii:</label>
                        <input type="text" id="Data" name="Data" required />
                    </div>
                </section>

                <main>
                    {/* */}
                </main>

                <div className="confirm-button">
                    <a href="./">
                        <button>Confirm</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Depunere