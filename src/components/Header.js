import React from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <div className='topnav' id='header'>
          <Link smooth={true} to="/#">Movie Maker</Link>
          <Link smooth={true} to="addMovie" className='add-button'>Add Movie</Link>
    </div>
  );
}

export default Header;
