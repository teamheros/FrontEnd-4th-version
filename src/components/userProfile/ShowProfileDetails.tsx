import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ShowProfileDetails = () => {

  const dispatch = useDispatch();

  let displayBioData: any;
  const displayCurrentUser = useSelector((state: any) => {
    console.log(state);
    return state.currentUser.currentUser;
  });
  
  console.log(displayCurrentUser.password);

    return(
        <div className='showprofile__details'>
          
                <h4>{displayCurrentUser.bioData}</h4> 
          
        </div>
    )
}

export default ShowProfileDetails;