/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React, {FC} from 'react';
import {StyleSheet, Image, StyleProp, ImageStyle} from 'react-native';

const MenuItemIcon: FC<MenuItemIconProps> = props =>
  props.children !== undefined ? (
    <Image source={{uri: props.children}} style={[style.image, props.style]} />
  ) : null;

interface MenuItemIconProps {
  style?: StyleProp<ImageStyle>;
  children: string;
}

const style = StyleSheet.create({
  image: {
    width: 10,
    height: 10,
  },
});

export default MenuItemIcon;
