import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { theme as testmeTheme, fonts as testmeFonts } from '../themes/testme';
import {
  theme as docHoundTheme,
  fonts as docHoundFonts,
} from '../themes/dochound';

const DesignSystem = ({ children }) => {
  if (children.props.theme === 'testme') {
    return (
      <ChakraProvider theme={testmeTheme} resetCSS>
        <Global styles={testmeFonts} />
        {children}
      </ChakraProvider>
    );
  }
  if (children.props.theme === 'dochound') {
    return (
      <ChakraProvider theme={docHoundTheme} resetCSS>
        <Global styles={docHoundFonts} />
        {children}
      </ChakraProvider>
    );
  }
};

export default DesignSystem;
