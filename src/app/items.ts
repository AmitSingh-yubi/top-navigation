import {ImageStyle, Image, Platform, StyleProp, TextStyle} from 'react-native';
import LOGO_ICON from '../assets/yubi-logo.png';
import CIRCLE_ICON from '../assets/circle.png';
import SAMPLE_ICON from '../assets/sample-icon.png';
import INTEGRATION_ICON from '../assets/Integration.svg';
import HOME_ICON from '../assets/Home.svg';
interface NavItem {
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

const LOGO_ICON_CONVERTED =
  Platform.OS === 'web'
    ? LOGO_ICON
    : Image.resolveAssetSource(LOGO_ICON as unknown as number).uri;
const CIRCLE_ICON_CONVERTED =
  Platform.OS === 'web'
    ? CIRCLE_ICON
    : Image.resolveAssetSource(CIRCLE_ICON as unknown as number).uri;
const SAMPLE_ICON_CONVERTED =
  Platform.OS === 'web'
    ? SAMPLE_ICON
    : Image.resolveAssetSource(SAMPLE_ICON as unknown as number).uri;
export const items: NavItem[] = [
  {
    label: 'Home',
    key: 'abc',
    showDropdownIcon: true,
    iconStyle: {
      width: 17.25,
      height: 15.28,
    },
    children: [
      {
        label: 'Test child item 1',
        key: 'abc1',
        iconURI: CIRCLE_ICON_CONVERTED,
        children: [
          {
            label: 'Test child item 11',
            key: 'abc11',
            iconURI: CIRCLE_ICON_CONVERTED,
            children: [
              {
                label: 'Test child item 111',
                key: 'abc111',
                iconURI: CIRCLE_ICON_CONVERTED,
              },
            ],
          },
          {
            label: 'Test child item 22',
            key: 'abc22',
            iconURI: CIRCLE_ICON_CONVERTED,
          },
        ],
      },
      {
        label: 'Test child item 3',
        key: 'abc3',
        iconURI: CIRCLE_ICON_CONVERTED,
        children: [
          {
            label: 'Test child item 111',
            key: 'abc111',
            iconURI: CIRCLE_ICON_CONVERTED,
          },
        ],
      },
    ],
  },
  {
    label: 'Integrations',
    key: 'def',
    iconStyle: {width: 14.59, height: 14.58},
    showDropdownIcon: true,
    onClick: () => {
      console.log('clicked item');
    },
    children: [
      {
        label: 'Test child item 1',
        key: 'def1',
        iconURI: CIRCLE_ICON_CONVERTED,
      },
    ],
  },
  {
    label: 'Profile',
    key: 'ghi',
    showDropdownIcon: true,
    children: [
      {
        label: 'Test child item 1',
        key: 'ghi1',
        iconURI: CIRCLE_ICON_CONVERTED,
      },
    ],
  },
  {
    label: 'My Portfolio',
    key: 'abc2',
    showDropdownIcon: true,
  },
];
