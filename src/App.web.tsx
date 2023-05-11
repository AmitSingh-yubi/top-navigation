import React, {useState} from 'react';
import {items} from './app/items';
import YbCoreTopnavigation from './yb-core-topnavigation';
import MenuItemIcon from './MenuItemIcon';
import {Pressable, Image} from 'react-native';
import LOGO_ICON from './assets/spocto.svg';
function App() {
  const [flipArrowIcon, setFlipArrowIcon] = useState(false);

  const LogoIcon = (
    <Pressable>
      <MenuItemIcon
        style={{
          height: 31,
          width: 94,
          marginRight: flipArrowIcon ? '10px' : '50px',
        }}>
        {LOGO_ICON}
      </MenuItemIcon>
    </Pressable>
  );
  const onLeftIconClick = (flipArrowIcon: boolean) => {
    setFlipArrowIcon(!flipArrowIcon);
  };
  return (
    <div className="App">
      <YbCoreTopnavigation
        leftComponent={{
          onLeftIconClick,
          logoIcon: LogoIcon,
        }}
        midComponent={{
          onChangeSearchText: () => console.log('sdfksdbksam'),
          searchStyle: {
            width: 180,
            height: 32,
            paddingLeft: 13,
            marginRight: 15,
          },
          menuItems: items,
        }}
        rightComponent={{
          onNotificationClick: () => {
            alert('notifications');
          },
          onSettingsClick: () => {
            alert('settings');
          },
          onProfileClick: () => {
            alert('profile');
          },
          rightLogo: <Image source={{uri: './assets/axisBank.svg'}} />,
          showSettings: true,
        }}
      />
    </div>
  );
}

export default App;
