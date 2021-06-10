import './App.css';
import MainPage from './components/mainPage';
import { Provider } from 'react-redux';
import store from './redux/redux';
import Practice from './practice/practice';
import Nav from './components/nav/Nav';
import ChatBody from './components/chatBody/ChatBody';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OTP from './components/userProfile/otp';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/chat.css';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/chat-screen' component={ChatBody} />
          <Route exact path='/otp' component={OTP} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
{
  /* <MainPage />
          <Nav />
          <ChatBody />

          <MainPage />

          <Practice />

          <Nav />
          <ChatBody /> */
}
