/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import '../App.css';
import './home.css';
import Profileside from '../component/Profileparts/ProfileSide/profileside';
import PostSide from '../component/Feed/PostSide/PostSide';
import RightSide from '../component/Common/RightSide/RightSide';
import ProfileCard from '../component/Profileparts/ProfileCard/ProfileCard';
function Homepage() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="Home">
        <Profileside/>
        <PostSide location='home' />
        <RightSide />
      </div>
    </div>
  );
}
export default Homepage;
