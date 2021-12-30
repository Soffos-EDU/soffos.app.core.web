import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import styles from './foundations/styles';
import textStyles from './foundations/text-styles';
import Alert from './components/alert';
import Button from './components/button';
import Breadcrumb from './components/breadcrumb';
import Form from './components/form';
import FormLabel from './components/form-label';
import FormError from './components/form-error';
import Heading from './components/heading';
import Input from './components/input';
import Checkbox from './components/checkbox';
import Link from './components/link';
import Modal from './components/modal';
import Accordion from './components/accordion';
import Avatar from './components/avatar';
import Drawer from './components/drawer';
import CloseButton from './components/close-button';
import Radio from './components/radio';
import Select from './components/select';
import Tabs from './components/tabs';
import Textarea from './components/textarea';

const breakpoints = createBreakpoints({
  sm: '37.5em', // small 600px
  md: '56.25em', // medium 900px
  lg: '68.75em', // large 1100px
  xl: '87.5em', // x-large 1400px
});

const theme = extendTheme({
  breakpoints,
  styles,
  textStyles,
  components: {
    Alert,
    Button,
    Breadcrumb,
    Form,
    FormLabel,
    FormError,
    Heading,
    Input,
    Checkbox,
    Link,
    Modal,
    Accordion,
    Avatar,
    Drawer,
    CloseButton,
    Radio,
    Select,
    Tabs,
    Textarea,
  },
  colors: {
    txt: {
      brand: '#000',
      dark: '#555',
      inverted: '#fff',
      link: '#555',
      muted: '#757575',
      primary: '#333333',
      placeholder: '#00000029',
    },
    bg: {
      brand: '#FFF9E3',
      dark: '#333',
      darkOverlay: 'rgba(0, 0, 0, 0.6)',
      error: 'rgba(208, 2, 26, 0.1)',
      info: 'rgba(10, 34, 90, 0.1)',
      inverted: '#3cd0c0',
      light: '#F5F5F5',
      muted: '#757575',
      primary: '#fff',
      success: 'rgba(71, 132, 6, 0.1)',
      tinted: '#EBEBEB',
      warning: 'rgba(184, 138, 0, 0.1)',
    },
    btn: {
      brand: '#3cd0c0',
      brandDisabled: 'rgba(204, 204, 204, 0.6)',
      brandHover: '#3cd0c0',
      dark: '#2fa398',
      darkDisabled: 'rgba(204, 204, 204, 0.6)',
      darkHover: '#2fa398',
      light: '#fff',
      lightDisabled: 'rgba(204, 204, 204, 0.6)',
      lightHover: '#3cd0c0',
    },
    icon: {
      brand: '#45a582',
      inverted: '#fff',
      muted: '#757575',
      primary: '#333333',
      dark: '#333333',
    },
    border: {
      active: '#3cd0c0',
      brand: '#3cd0c0',
      decorative: '#ccc',
      disabled: 'rgba(204, 204, 204, 0.6)',
      error: '#d0021a',
      inverted: '#fff',
      muted: '#757575',
      primary: '#333',
    },
    alert: {
      error: '#d0021a',
      success: '#478406',
      info: '#0a225a',
      warning: '#b88a00',
    },
    brand: '#ddc9a3',
    focus: '#68a2f9',
    msg: {
      callout: '#478406',
      coupon: '#6dc6cc',
      gearhead: '#45a582',
      urgent: '#7f0000',
    },
    loyalty: {
      tier1: '#009ABB',
      tier2: '#54A5BC',
      tier3: '#9AD9EA',
    },
  },
  // DSM use base and brand as tokens, including body and heading
  // to overwrite Chakra's defaults
  fonts: {
    body: 'Helvetica, Arial, sans-serif',
    heading: 'Helvetica, Arial, sans-serif',
    base: 'Helvetica, Arial, sans-serif',
    brand: 'Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
  },
  fontWeights: {
    normal: 'normal',
    bold: 'bold',
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    tight: '1.4',
    loose: '1.9',
  },
  space: {
    px: '1px',
    0: '0',
    1: '4px',
    2: '8px',
    3: '16px',
    4: '24px',
    5: '32px',
    6: '40px',
    7: '48px',
    8: '56px',
    9: '64px',
    10: '72px',
    11: '80px',
    12: '88px',
    13: '96px',
    14: '104px',
    15: '112px',
    16: '120px',
    17: '128px',
  },
  shadows: {
    primary: {
      drop: '0px 4px 10px rgba(0, 0, 0, 0.06)',
      left: '-4px 0px 10px rgba(0, 0, 0, 0.06)',
      top: '0px -4px 10px rgba(0, 0, 0, 0.06)',
      right: '4px 0px 10px rgba(0, 0, 0, 0.06)',
    },
    emphasized: {
      drop: '0px 4px 10px rgba(0, 0, 0, 0.12)',
      left: '-4px 0px 10px rgba(0, 0, 0, 0.12)',
      top: '0px -4px 10px rgba(0, 0, 0, 0.12)',
      right: '4px 0px 10px rgba(0, 0, 0, 0.12)',
    },
  },
});

export { theme };
