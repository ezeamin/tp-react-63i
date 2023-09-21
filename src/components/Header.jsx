import { Link, useLocation } from 'react-router-dom';

import { setFirstLetterToUpperCase } from '../helpers/helpers';

const Header = () => {
  const { pathname } = useLocation();

  const title = setFirstLetterToUpperCase(
    pathname.split('/')[1].split('-').join(' ')
  );

  return (
    <header className='p-3 d-flex justify-content-between align-items-center'>
      <Link to='/' className='btn btn-light'>
        &lt; Volver a Home
      </Link>
      <p className='text-light mb-0'>{title}</p>
    </header>
  );
};
export default Header;
