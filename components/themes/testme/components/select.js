export default {
  variants: {
    outline: {
      field: {
        borderColor: 'border.primary',
        borderRadius: '4px',
        h: '48px',
        px: 3,
        _hover: {
          borderColor: 'border.primary',
        },
        _placeholder: {
          color: 'txt.link',
        },
      },
    },
  },
  defaultProps: {
    errorBorderColor: 'alert.error',
    focusBorderColor: 'border.active',
  },
};
