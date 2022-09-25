import { useState } from 'react';
import './NavHamburger.css'

export default function NavHamburger() {
  function handleClick() {
    console.log('clicked');
    setSwitchPositionClose(!switchPositionClose);
  }

  const [switchPositionClose, setSwitchPositionClose ] = useState(false);

  return <button className="nav-toggle" id="nav-toggle" onClick={handleClick} >
  <span className={`hamburger ${switchPositionClose ? 'hamburger-close' : '' }`}>
      <span className={switchPositionClose ? 'lines top-close' : 'lines top-normal'} id="burger-top"></span>
      <span className={switchPositionClose ? 'lines bottom-close' : 'lines bottom-normal'} id="burger-bottom"></span>
  </span>
</button>
}
