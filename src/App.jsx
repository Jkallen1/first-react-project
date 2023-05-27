import { useState } from 'react'
import './App.css'
import Destinations from './components/destinations';
import PackageItem from './components/pack1';
import Testimonials from './components/testimonials';
import Contacts from './components/contacts';
import Bottom from './components/bottom';


function App() {

  return (

    <>
      <Destinations />
      <PackageItem />

      <Testimonials title="Testimonials from our adventurers:"
        quote1="Wow! This tour made me realize how much I love being outside with my friends. After going on one of these tours, I can safely say that beer pong is my favorite game all time, also the cultural programs were really interesting!"
        author1="- Albert Herter"
        quote2="Wow, this really blew my mind. We had so much fun at the beach, and also some hidden secrets revealed. Come on, I'm living in this city for 5 years. Amazing!"
        author2="- Sharon Rosenberg"
        quote3="If you want to understand your friends better, head to the mountains. I mean, seriously. It's like sitting next to a campfire and just talk in the sunset, woah. You know? It's like that."
        author3="- Luis Mendoza" />
      <Contacts />
      <Bottom />

    </>


  );
}

export default App
