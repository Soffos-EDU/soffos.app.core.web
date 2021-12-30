export default {
  baseStyle: {
    control: {
      borderColor: 'border.decorative',
      _checked: {
        bg: 'bg.inverted',
        borderColor: 'border.active',
        _hover: {
          bg: 'bg.inverted',
          borderColor: 'border.active',
        },
      },
      _disabled: {
        background: 'none',
        borderColor: 'border.disabled',
      },
    },
  },
  variants: {
    custom: {
      control: {
        opacity: 0,
        position: 'absolute',
      },
      label: {
        m: 0,
      },
    },
  },
};
