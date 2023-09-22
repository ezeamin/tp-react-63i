import { generateRandomAvatar } from '../../helpers/helpers';

import './styles.css';

const Appointment = (props) => {
  const { appointment, setAppointments } = props;

  const randomAvatarUrl = generateRandomAvatar('thumbs');
  const formattedDate = new Date(appointment.date).toLocaleDateString('es-AR');

  const handleDelete = () => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter(
        (prevAppointment) => prevAppointment.id !== appointment.id
      )
    );
  };

  return (
    <article className='col-12 col-md-4'>
      <div className='card w-100'>
        <header className='card-header d-flex'>
          <img
            src={randomAvatarUrl}
            alt='avatar image'
            className='avatar-image'
          />
          <div className='ms-3'>
            <h3>Mascota: {appointment.mascotName}</h3>
            <h6 className='text-secondary'>Dueño: {appointment.ownerName}</h6>
          </div>
        </header>
        <div className='card-body'>
          <p className='card-text'>Fecha: {formattedDate}</p>
          <p className='card-text'>Hora: {appointment.time}</p>
          <p className='card-text'>Sintomas: {appointment.symptoms}</p>
          <div className='text-end'>
            <button className='btn btn-danger' onClick={handleDelete}>
              Borrar &times;
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Appointment;
