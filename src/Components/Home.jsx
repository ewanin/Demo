import React from 'react'
import Loading from './Loading'
import Test from './Test';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7/Section7';
import Section8 from './Section8';

const Home = () => {
  return (
    <div className=' text-primary bg-secondary overflow-hidden'>
      <Loading />
      <Section1 />
      <Section2 />
      <Section3 /> 
       <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      {/* <Test /> */}
    </div>
  )
}

export default Home;