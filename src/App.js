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
      <section className='hero-section'>
        <div className='hero-container'>
          <div className='hero-text'>
            <h2>Bryon Verdone</h2>
            <p>Front-End Web Developer</p>
          </div>
          <div className='hero-img'>
            <img className='hero-img' src='./photos/logo192.png' alt='' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
