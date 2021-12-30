export default {
  variants: {
    line: {
      tablist: {
        border: 'none',
      },
      tab: {
        _selected: {
          color: 'txt.primary',
          borderBottom: '2px solid',
          borderBottomColor: 'border.brand',
          fontWeight: 'bold',
        },
        _active: {
          bg: 'transparent',
        },
        _hover: {
          fontWeight: 'bold',
        },
      },
    },
  },
};
