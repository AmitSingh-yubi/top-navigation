import YbCoreNavBar from '@yubi/yb-core-nav-bar';
import {useStyles} from '@yubi/yb-style-provider';
import React, {FC, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ViewStyle,
  StyleProp,
  Pressable,
} from 'react-native';
import MenuItemIcon from '../../MenuItemIcon';
import {NavItem} from './types';
import RIGHT_ARROW from '../../assets/arrow.svg';
import LEFT_ARROW from '../../assets/leftArrow.svg';

export interface CoreTopNavBarProps {
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
    rightElements: Array<React.ReactElement>;
  };
}
export const CoreTopNavBar: FC<CoreTopNavBarProps> = props => {
  const [flipArrowIcon, setFlipArrowIcon] = useState(false);
  const {
    leftComponent: {logoIcon, onLeftIconClick},
    midComponent: {searchStyle, menuItems, onChangeSearchText},
    rightComponent: {rightElements},
  } = props;
  const {styleConnector} = useStyles();

  const onPressLeftIcon = () => {
    onLeftIconClick?.(flipArrowIcon);
    setFlipArrowIcon(prev => !prev);
  };

  const rightArrowIcon = (
    <MenuItemIcon
      style={{
        height: 12,
        width: 16,
        marginRight: flipArrowIcon ? '10px' : '10px',
      }}>
      {RIGHT_ARROW}
    </MenuItemIcon>
  );

  const leftArrowIcon = (
    <MenuItemIcon
      style={{
        height: 12,
        width: 16,
        marginRight: flipArrowIcon ? '50px' : '10px',
      }}>
      {LEFT_ARROW}
    </MenuItemIcon>
  );

  return (
    <SafeAreaView
      style={{
        height: Dimensions.get('window').height,
        position: 'relative',
      }}>
      <YbCoreNavBar
        componentType="Web"
        items={menuItems}
        leftIcon={
          <View>
            {!flipArrowIcon && (
              <Pressable onPress={onPressLeftIcon}>{rightArrowIcon}</Pressable>
            )}
            {flipArrowIcon && <Pressable>{logoIcon}</Pressable>}
          </View>
        }
        logoIcon={
          <View>
            {flipArrowIcon && (
              <Pressable onPress={onPressLeftIcon}>{leftArrowIcon}</Pressable>
            )}
            {!flipArrowIcon && <Pressable>{logoIcon}</Pressable>}
          </View>
        }
        searchStyle={searchStyle}
        onChangeSearchText={onChangeSearchText}
        rightItems={rightElements}
        styleConnector={styleConnector}
        showUser={false}
      />
    </SafeAreaView>
  );
};
