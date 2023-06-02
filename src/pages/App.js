import '../css/App.css';
import '../css/styles.css';
import headshot from '../assets/headshot.jpeg';

function App() {
  return (

    <div className="container">

      <div className="left">
        <div className='leftbox'>
          <img src={headshot} alt='headshot' style={{ width: '150px', height: 'auto' }}></img>
          <h2 className='text'>Swarit Dholakia</h2>
          <ul>
          <a href="https://twitter.com/swaritdholakia">Twitter</a>
          </ul><ul>
          <a href="mailto:dholakia.swarit@gmail.com">Email</a>
          </ul><ul>
          <a href="https://swarit.substack.com/">Blog</a>
          </ul>
        </div>
      </div>

      <div className="right">
        <div className='rightbox'>
          <h3 className='text'>About</h3>
        </div>
      </div>

    </div>

  );
}

export default App;
