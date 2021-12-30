import { Flex } from '@chakra-ui/react';

const Grid = ({ children, fluid, ...props }) => {
  return (
    <Flex
      {...props}
      m="0 auto"
      boxSizing="border-box"
      maxW={fluid ? '100vw' : 1400}
      w={fluid ? '100%' : { base: '98%', xl: '100%' }}
    >
      {children}
    </Flex>
  );
};

export default Grid;
