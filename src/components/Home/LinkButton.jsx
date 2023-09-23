import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  const { index } = props;

  if(index === 15) return (
    <Link to={`/ejercicio-8-v2`} className='btn btn-warning col-3'>
      &gt; Ejercicio 8 v2
    </Link>
  );

  return (
    <Link to={`/ejercicio-${index}`} className='btn btn-light col-3'>
      &gt; Ejercicio {index}
    </Link>
  );
};

export default LinkButton;
