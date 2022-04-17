import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import images from './band-images';
const members = [
  {
    id: 1,
    img: `https://storage.googleapis.com/production-bluehost-v1-0-0/090/1216090/iRr7Pljj/38ff8d53885a48f081d8c37f369a54a1`,
    name: 'Jeremy',
    position: 'Vocals/Guitar',
  },
  {
    id: 2,

    img: 'https://storage.googleapis.com/production-bluehost-v1-0-0/090/1216090/iRr7Pljj/6662228117a945cd93561f365d1a6941',
    name: 'Earl',
    position: 'Vocals/Guitar',
  },
  {
    id: 3,

    img: 'https://storage.googleapis.com/production-bluehost-v1-0-0/090/1216090/iRr7Pljj/ab7ed94585d744d684eff658f5e1230e',
    name: 'Ben',
    position: 'Drums',
  },
  {
    id: 4,

    img: 'https://storage.googleapis.com/production-bluehost-v1-0-0/090/1216090/iRr7Pljj/058525fcf8ba41af93365f4933337478',
    name: 'Dave',
    position: 'Keys/Syth',
  },
  {
    id: 5,

    img: 'https://storage.googleapis.com/production-bluehost-v1-0-0/090/1216090/iRr7Pljj/e7e15f6bdc2a492e92a815d4fff0f295',
    name: 'Bryon',
    position: 'Bass',
  },
  {
    id: 6,

    img: 'https://storage.googleapis.com/production-bluehost-v1-0-0/090/1216090/iRr7Pljj/bc16aa4f79ff47cb8b805ca028b8f4be',
    name: 'Craig',
    position: 'Guitar',
  },
];
function BandList() {
  return (
    <section className='list-container'>
      {members.map((member) => {
        return <Card key={member.id} {...member}></Card>;
      })}
    </section>
  );
}

const Card = (props) => {
  const { img, name, position } = props;
  return (
    <article className='card-center'>
      <img style={{ width: 300 }} src={img} alt='' />
      <h1>{name}</h1>
      <h4>{position}</h4>
    </article>
  );
};
ReactDOM.render(<BandList />, document.getElementById('root'));
