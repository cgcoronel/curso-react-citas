import React from 'react';

class Cita extends React.Component {



	render () {
		const {fechaRef, horaRef, nombreMascotaRef, propietarioRef, sintomasRef } = this.props.info;

		console.log(this.props.info);
		return (
			<div className='media mt-3'>
				<div className='media-body'>
					<h3 className='mt-0'>{nombreMascotaRef}</h3>
					<p className='card-text'><span>Nombre Dueños:  </span>{propietarioRef}</p>
					<p className='card-text'><span>Fecha:          </span>{ fechaRef }</p>
					<p className='card-text'><span>Hora:           </span>{ horaRef }</p>
					<p className='card-text'><span>Sintomas:       </span> <br />
						{ sintomasRef }
					</p>
					<button onClick={ () => {
							this.props.borrarCita( this.props.idCita )
						}
					} className='btn btn-danger'> Borrar &times;</button>
				</div>
			</div>
		)
	}
}

export default Cita;
