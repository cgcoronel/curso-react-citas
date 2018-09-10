import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
      citas : {}
  }

  crearCita = (infoCita) => {
    //copia del estate
    const citas = {...this.state.citas};

    citas[`citas${Date.now()}`] = infoCita;

    this.setState({
      citas
    });
  }

  borrarCita = (id) => {
    const citas = {...this.state.citas};

    delete citas[id];

    this.setState({
      citas
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo='Administrador de Pacientes de Veterinaria'
        />

        <div className='row'>
          <div className='col-md-6'>
            <AgregarCita
              crearCita={this.crearCita}
            />
          </div>
          <div className='col-md-6'>
          <ListaCitas
            citas={this.state.citas}
            borrarCita={this.borrarCita}
          />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
