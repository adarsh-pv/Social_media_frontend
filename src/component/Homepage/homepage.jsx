/* eslint-disable prettier/prettier */
import '../../App.css';
import './home.css';
import Profileside from '../ProfileSide/profileside';
import PostSide from '../PostSide/PostSide';
import RightSide from '../RightSide/RightSide';
function Homepage() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="Home">
        <Profileside />
        <PostSide />
        <RightSide />
      </div>
    </div>
  );
}
export default Homepage;
