import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav className='navbar'>
        <div className='logo-container'>Logo</div>
        <div className='nav-links'>
          <ul>
            <a href='#'>
              <li className='nav-item'>Home</li>
            </a>
            <a href='#'>
              <li className='nav-item'>About</li>
            </a>
            <a href='#'>
              <li className='nav-item'>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <section className='hero-section'>
          <div className='hero-container'>
            <div className='hero-text'>
              <h2>Bryon Verdone</h2>
              <p>Front-End Web Developer</p>
              <button className='btn'>Hire Me</button>
            </div>
            <div className='hero-img'>
              <img
                className='hero-img'
                src='./photos/bryon_react_img.png'
                alt=''
              />
            </div>
          </div>
        </section>
        <section className='tech-section'>
          <h1 className='section-heading'>Tech I Use</h1>
          <div className='tech-container'>
            <div className='tech-img-container'>
              <img src='./photos/HTML5.png' alt='' />
            </div>
            <div className='tech-img-container'>
              <img src='./photos/CSS.png' alt='' />
            </div>
            <div className='tech-img-container'>
              <img src='./photos/JS.png' alt='' />
            </div>
            <div className='tech-img-container'>
              <img src='./photos/Bootstrap.png' alt='' />
            </div>
            <div className='tech-img-container'>
              <img src='./photos/logo192.png' alt='' />
            </div>
            <div className='tech-img-container'>
              <img src='./photos/Git-Icon.png' alt='' />
            </div>
            <div className='tech-img-container'>
              <img src='./photos/github_logo.png' alt='' />
            </div>
          </div>
        </section>
        <section className='services-section'>
          <h1 className='section-heading'>Services</h1>
          <div className='services-container'>
            <div className='services-card'>
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                delectus magni nulla deserunt facere repellat!
              </p>
            </div>
            <div className='services-card'>
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                delectus magni nulla deserunt facere repellat!
              </p>
            </div>
            <div className='services-card'>
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                delectus magni nulla deserunt facere repellat!
              </p>
            </div>
            <div className='services-card'>
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                delectus magni nulla deserunt facere repellat!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
