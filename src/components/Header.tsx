import * as React from 'react';
import Content from './Content';
import Navigation from './Navigation';
import Slideshow from './slideshow';



export default function Header() {
  return (
  <header className='header'>
    {/* <Navigation></Navigation> */}
    
    <Navigation></Navigation>
    <Slideshow></Slideshow>
    <Content></Content>

  </header>
  );
}
