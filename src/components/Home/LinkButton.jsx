import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  const { index } = props;

  return (
    <Link to={`/ejercicio-${index}`} className='btn btn-light'>
      &gt; Ejercicio {index}
    </Link>
  );
};

export default LinkButton;
