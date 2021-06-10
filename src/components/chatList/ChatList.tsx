import React, { useEffect } from 'react';
import './chatList.css';
import ChatListItems from '../chatList/ChatListItem';
import { useDispatch, useSelector } from 'react-redux';


function ChatList() {
  const dispatch = useDispatch();
let displayUsers:any, displayAllUserConvo:any;
 displayUsers = useSelector((state: any) => {
    return state.user.user;
  });

 displayAllUserConvo = useSelector((state: any) => {
    return state.users.users;
  });
  useEffect(() => {

  },[displayAllUserConvo])
console.log(displayAllUserConvo);


function displayChat(id:any, e:any){
  e.preventDefault();
  console.log('Display Chat', id);
  
}

  return (
    <div>
      <div className='main__chatlist'>
        <div className='select-container'>
          <select className='select-users'>
            <option value=''>New Conversation</option>
            {displayUsers.map((option: any) => (
              <option className='select-users-list' value={option.firstName}>
                {option.firstName} - {option.userName}
              </option>
            ))}
          </select>
        </div>
        <div className='chatlist__heading'>
          <h2>Chats</h2>
          <button className='btn-nobg'>
            <i className='fa fa-ellipsis-h'></i>
          </button>
        </div>
        <div className='chatList__search'>
          <div className='search_wrap'>
            <input type='text' placeholder='Search Here' required />
            <button className='search-btn'>
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
        <div className='chatlist__items'>
          {displayAllUserConvo.map((item: any, i: any) => {
            console.log(item[0], i);
            
            return (
              <div onClick={(e:any) => displayChat(item._id, e)}>
                <ChatListItems

                  name={item.firstName}
                  key={item._id}
                  animationDelay={i + 1}
                  // active={item.active ? 'active' : ''}
                  // isOnline={item.isOnline ? 'active' : ''}
                  image={'http://localhost:4000' + item.profileImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatList

{
  /* <ChatListItems
name={item.firstName}
key={item._id}
animationDelay={index + 1}
// active={item.active ? 'active' : ''}
// isOnline={item.isOnline ? 'active' : ''}
image={'http://localhost:4000' + item.profileImage}
/> */
}

{
  /* <ChatListItems
name={item.name}
key={item.id}
animationDelay={index + 1}
// active={item.active ? 'active' : ''}
// isOnline={item.isOnline ? 'active' : ''}
image={'http://localhost:4000' + item.image}
/> */
}

const allChats = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
    id: 1,
    name: 'Manjunath',
    active: true,
    isOnline: true,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU',
    id: 2,
    name: 'Rutu',
    active: false,
    isOnline: false,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
    id: 3,
    name: 'Hamaad Dejesus',
    active: false,
    isOnline: false,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU',
    id: 4,
    name: 'Eleni Hobbs',
    active: false,
    isOnline: true,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
    id: 5,
    name: 'Elsa Black',
    active: false,
    isOnline: false,
  },
  {
    image: 'https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png',
    id: 6,
    name: 'Kayley Mellor',
    active: false,
    isOnline: true,
  },
  {
    image: 'https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png',
    id: 7,
    name: 'Hasan Mcculloch',
    active: false,
    isOnline: true,
  },
  {
    image: 'https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg',
    id: 8,
    name: 'Autumn Mckee',
    active: false,
    isOnline: false,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU',
    id: 9,
    name: 'Allen Woodley',
    active: false,
    isOnline: true,
  },
  {
    image: 'https://pbs.twimg.com/profile_images/770394499/female.png',
    id: 10,
    name: 'Manpreet David',
    active: false,
    isOnline: true,
  },
];
