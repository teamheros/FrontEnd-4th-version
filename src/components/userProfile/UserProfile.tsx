import './userProfile.css';
import ProfilePic from '../../images/userprofile5.jpg';
import { useSelector } from 'react-redux';
import SideNavBar from './ChatSideNav';

const UserProfile = () => {
  const displayCurrentUser = useSelector((state: any) => {
    console.log(state);
    return state.currentUser.currentUser;
  });
  console.log(displayCurrentUser);

  const toggleInfo = (e: any) => {
    e.target.parentNode.classList.toggle('open');
  };

  return (
    <div className='main__userprofile'>
      <div className='profile__card user__profile__image'>
        <div className='profile__image'>
          <img src={'http://localhost:4000' + displayCurrentUser.profileImage} />
        </div>
        <h4>{displayCurrentUser.firstName}</h4>
        <p>Sofware Engineer, Mindtree</p>
      </div>
      <div className='profile__card'>
        {/* <div className='card__header' onClick={toggleInfo}>
          <h4 className="information">Information</h4>
          <i className='fa fa-angle-down'></i>
        </div>
        <div className='card__content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna a imperdiet egestas. Donec in
          magna quis ligula
        </div> */}
        <br></br>
        <div className='side__nav'>
          <SideNavBar />
          </div>
      
      </div>
    </div>
  );
};

export default UserProfile;
