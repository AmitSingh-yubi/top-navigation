import { ImageStyle, StyleProp, TextStyle } from "react-native";

export interface NavItem {
  label: string;
  iconURI?: string;
  key: string;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  children?: Omit<
    NavItem,
    'showDropdownIcon' | 'customFloatingIcon' | 'zIndex'
  >[];
  disabled?: boolean;
  isActive?: boolean;
  showDropdownIcon?: boolean;
  customFloatingIcon?: (hovered?: boolean) => React.ReactNode;
  zIndex?: number;
  onClick?: () => void;
}
