import { Box, useBreakpointValue } from '@chakra-ui/react';
import isPlainObject from 'lodash/isPlainObject';
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';
import mapValues from 'lodash/mapValues';
const GRID_COLS = 12;

const getWidthValue = (size) =>
  isNil(size) ? null : `${size * (100 / GRID_COLS)}%`;

const sizeTransform = (size) => {
  if (isPlainObject(size)) {
    return mapValues(size, (sizeValue) => getWidthValue(sizeValue));
  }
  if (isArray(size)) {
    return size.map((sizeValue) => getWidthValue(sizeValue));
  }
  return getWidthValue(size);
};

const GridItem = ({ size, offset, toContent, children, ...props }) => {
  const itemSize = sizeTransform(size);
  const itemOffset = sizeTransform(offset);
  const currentSize = useBreakpointValue(size || {});

  return (
    <Box
      {...props}
      boxSizing="border-box"
      flex={1}
      ml={itemOffset}
      flexBasis={size ? itemSize : 0}
      flexGrow={toContent ? 0 : 1}
      maxW={size ? itemSize : '100%'}
      paddingRight={{
        base: currentSize === GRID_COLS ? 0 : 2,
        md: currentSize === GRID_COLS ? 0 : 3,
      }}
      _last={{
        paddingRight: 0,
      }}
    >
      {children}
    </Box>
  );
};

export default GridItem;
