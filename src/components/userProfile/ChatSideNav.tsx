import React, { useEffect } from 'react';
import { Menu, Switch } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import ShowCalendar from './Calendar'
import ShowProfileDetails from './ShowProfileDetails'
import WeatherTool from '../AppTools/WeatherTool'
import { useDispatch, useSelector } from 'react-redux';

const { SubMenu } = Menu;

const SideNavBar = () => {

  const [theme, setTheme]:any= React.useState('light');

  const handleClick:any = (e:any) => {
    console.log('click ', e);
  };

  const changeTheme = (value:any )=> {
    setTheme(value ? 'dark' : 'light');
  };

  
    return (
      <>
      <Switch onChange={changeTheme} /> Change Style
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme={theme}
      >
      <WeatherTool />
        {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
       
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Settings">
          
          <SubMenu key="sub3" title="Add Reminder" >
            <ShowCalendar />
          </SubMenu>
          <SubMenu key="sub3" title="Profile" >
           <ShowProfileDetails />
          </SubMenu>
        </SubMenu>

        <Menu.ItemGroup key="g2" title="Item 2">
            
            <Menu.Item key="4">Check Weather</Menu.Item>
            
          </Menu.ItemGroup>  
      </Menu>
      </>
    );
}

export default SideNavBar;