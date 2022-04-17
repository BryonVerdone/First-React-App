const Card = (props) => {
  const { img, name, position } = props;
  const logNameAndPosition = (name) => {
    console.log(`This is ${name} and they play ${position}`);
  };
  return (
    <article className='card-center'>
      <img style={{ width: 300 }} src={img} alt='' />
      <h1>{name}</h1>
      <h4>{position}</h4>
      <button
        type='button'
        onClick={() => {
          console.log(name);
        }}
      >
        Click Me
      </button>
      <button type='button' onClick={() => logNameAndPosition(name)}>
        click to find out more info
      </button>
    </article>
  );
};
export default Card;
