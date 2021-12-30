export default {
  variants: {
    filled: {
      field: {
        background: 'bg.primary',
        borderRadius: '0',
        h: '48px',
        px: 3,
        _hover: {
          background: 'bg.primary',
          borderColor: 'border.brand',
        },
        _focus: {
          background: 'bg.primary',
          borderColor: 'border.brand',
        },
        _placeholder: {
          color: 'txt.placeholder',
          fontStyle: 'italic',
        },
      },
      addon: {
        h: '48px',
      },
    },
    outline: {
      field: {
        borderColor: 'border.primary',
        borderRadius: '0',
        h: '48px',
        px: 3,
        _hover: {
          borderColor: 'border.primary',
        },
        _placeholder: {
          color: 'txt.link',
        },
      },
      addon: {
        h: '48px',
      },
    },
  },
  defaultProps: {
    errorBorderColor: 'alert.error',
    focusBorderColor: 'border.active',
  },
};
