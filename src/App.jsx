import { useState } from 'react'
import Carousel from './carousel'
import './App.css'
import Destinations from './components/destinations';
import Packages from './components/pack1';
import Testimonials from './components/testimonials';
import Contacts from './components/contacts';
import Bottom from './components/bottom';


function App() {

  return (

    <>
      <Destinations />
      <Packages title="Tour Packages"
        description="We offer a variety of group (minimum 5 people) packages. Whether you've spent some summers together or this might be your first adventure, we've got the perfect vacation for you."
        package1Title="Guided Trips"
        package1Description="Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise."
        package2Title="Photo Trips"
        package2Description="Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our 'Life is a party!' buses."
        package3Title="Biking Trips"
        package3Description="If bicycles are more your speed, consider taking a tour through one of our mountain or city bike paths. We'll provide the bikes, and lunch too!"
        package4Title="Racing Trips"
        package4Description="Got a competitive spirit? Sign up for one of our challenge-based marathons! Try to reach the summit before any other group." />
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
