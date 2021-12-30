import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const DesignSystem = ({ children }) => (
  <ChakraProvider theme={children.props.theme} resetCSS>
    <Global styles={children.props.fonts} />
    {children}
  </ChakraProvider>
);

export default DesignSystem;
