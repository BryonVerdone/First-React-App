import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Jer.jpeg';
// import images from './band-images';
const jeremy = {
  img: './Jer.jpeg',
  name: 'Jeremy',
  position: 'Vocals/Guitar',
};
const earl = {
  // img: './public/band-images/Jer.jpeg',
  name: 'Earl',
  position: 'Vocals/Guitar',
};
const ben = {
  // img: './public/band-images/Jer.jpeg',
  name: 'Ben',
  position: 'Drums',
};
const dave = {
  // img: './public/band-images/Jer.jpeg',
  name: 'Dave',
  position: 'Keys/Syth',
};
const bryon = {
  // img: './public/band-images/Jer.jpeg',
  name: 'Bryon',
  position: 'Bass',
};
const craig = {
  // img: './public/band-images/Jer.jpeg',
  name: 'Craig',
  position: 'Guitar',
};
function BandList() {
  return (
    <section className='list-container'>
      <Card img={jeremy.img} name={jeremy.name} position={jeremy.position} />
      <Card img={earl.img} name={earl.name} position={earl.position} />
      <Card img={ben.img} name={ben.name} position={ben.position} />
      <Card img={dave.img} name={dave.name} position={dave.position} />
      <Card img={craig.img} name={craig.name} position={craig.position} />
      <Card img={bryon.img} name={bryon.name} position={bryon.position} />
    </section>
  );
}

const Card = (props) => {
  return (
    <article>
      <img src={props.img} alt='' />
      <h1>{props.name}</h1>
      <h4>{props.position}</h4>
    </article>
  );
};
ReactDOM.render(<BandList />, document.getElementById('root'));
