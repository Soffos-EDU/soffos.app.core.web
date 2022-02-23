import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const DesignSystem = ({ children }) => {
  return (
    <ChakraProvider theme={children.props.theme} resetCSS>
      <Global styles={children.props.theme.fonts} />
      {children}
    </ChakraProvider>
  );
};

export default DesignSystem;
