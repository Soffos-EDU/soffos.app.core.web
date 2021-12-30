export default {
  baseStyle: {
    dialog: {
      borderRadius: 0,
    },
    closeButton: {
      top: '16px',
      right: '16px',
    },
    header: {
      pt: 7,
    },
    footer: {
      pb: 7,
    },
  },
  variants: {
    darkHover: {
      closeButton: {
        bg: 'bg.primary',
        _hover: {
          bg: 'bg.dark',
          color: 'bg.primary',
        },
      },
    },
  },
};
