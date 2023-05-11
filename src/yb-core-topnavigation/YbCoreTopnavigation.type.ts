import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {NavItem} from './CoreTopNavBar/types';

export interface YbCoreTopnavigationProps {
  leftComponent: {
    logoIcon: React.ReactNode;
    onLeftIconClick?: (value: boolean) => void;
  };
  midComponent: {
    searchStyle: StyleProp<ViewStyle>;
    menuItems: NavItem[];
    onChangeSearchText: (text: string) => void;
  };
  rightComponent: {
    onSettingsClick: () => void;
    onNotificationClick: () => void;
    onProfileClick: () => void;
    rightLogo: ReactNode;
    showSettings: boolean;
  };
}
