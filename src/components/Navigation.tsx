import * as React from 'react';
import logosmall from '../assets/ssb_logo_small.png'

export default function Navigation() {
  return (
    <div className="container">
      
      <nav>
        <div className='container__logo-box'>
          <img className='container__logo' src={logosmall} alt='logo'></img>
        </div>
       <ul className='navigation'>
         <div className="positionwrapper">
          <li><a className="btn btn--nav" href="#">Inputs</a></li>
          <li><a className="btn btn--nav" href="#">Farm</a></li>
          <li><a className="btn btn--nav" href="#">Processing</a></li>
          <li><a className="btn btn--nav" href="#">Marketing</a></li>
          <li><a className="btn btn--nav" href="#">Other</a></li>
         </div>
         
       </ul>
     </nav>


    </div>
    );
}
