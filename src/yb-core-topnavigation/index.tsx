import YbCoreNavBar from '@yubi/yb-core-nav-bar';
import React, {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import {items} from '../app/items';
import {CoreTopNavBar} from './CoreTopNavBar';
import YbCoreTopnavigationStyle from './YbCoreTopnavigation.style';
import {YbCoreTopnavigationProps} from './YbCoreTopnavigation.type';
import YbCoreNotification from '@yubi/yb-core-notification';
import {useStyles} from '@yubi/yb-style-provider';
import CaAvatar from '@yubi/yb-core-avatar';
import MenuItemIcon from '../MenuItemIcon';
import DROP_DOWN from '../assets/menu-dropdown.png';
import BELL from '../assets/bell-icon.png';
import BANK from '../assets/axisBank.svg';
import SETTINGS from '../assets/setting.svg';

import AVATOR from '../assets/avator.svg';

const style = StyleSheet.create({
  image: {
    width: 10,
    height: 10,
  },
});

const YbCoreTopnavigation: FC<YbCoreTopnavigationProps> = props => {
  const {
    leftComponent,
    midComponent,
    rightComponent: {
      showSettings,
      rightLogo,
      onSettingsClick,
      onNotificationClick,
      onProfileClick,
    },
  } = props;
  const {styleConnector} = useStyles();

  const pressable = () => {
    if (!showSettings) return <></>;
    return (
      <Pressable
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 4,
          paddingLeft: 8,
          paddingRight: 12,
          borderRadius: 8,
          backgroundColor: '#F2F5F9',
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Sofia Pro',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 14,
            lineHeight: 23,
            color: '#4D6D9B',
          }}>
          Saved Deals
        </Text>
      </Pressable>
    );
  };

  const notificationIcon = () => {
    return (
      <Pressable>
        <MenuItemIcon style={{height: 20, width: 30}}>{BELL}</MenuItemIcon>
      </Pressable>
    );
  };

  const settings = () => {
    return (
      <Pressable onPress={onSettingsClick}>
        <MenuItemIcon style={{height: 20, width: 30, margin: '0 10px 0 10px'}}>
          {SETTINGS}
        </MenuItemIcon>
      </Pressable>
    );
  };

  const notifications = () => {
    return (
      <Pressable onPress={onNotificationClick}>
        <MenuItemIcon
          style={{height: 10, width: 20, marginLeft: 20, marginRight: 20}}>
          {BELL}
        </MenuItemIcon>
      </Pressable>
    );
  };

  const avator = () => {
    return (
      <Pressable onPress={onProfileClick}>
        <MenuItemIcon
          style={{height: 40, width: 40, marginLeft: 20, marginRight: 20}}>
          {AVATOR}
        </MenuItemIcon>
      </Pressable>
    );
  };

  return (
    <CoreTopNavBar
      leftComponent={leftComponent}
      midComponent={midComponent}
      rightComponent={{
        rightElements: [
          settings(),
          notifications(),
          avator(),
          <Pressable>
            <MenuItemIcon style={{height: 30, width: 120}}>{BANK}</MenuItemIcon>
          </Pressable>,
        ],
      }}
    />
  );
};

export default YbCoreTopnavigation;
