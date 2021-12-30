export default {
  baseStyle: {
    borderRadius: '100px',
    fontSize: 'md',
    fontWeight: 'bold',
    h: '48px',
    minW: '130px',
    px: 4,
    textTransform: 'capitalize',
    transition: '0.3s',
    _disabled: {
      opacity: 1,
    },
  },
  variants: {
    solid: {
      bg: 'btn.dark',
      color: 'txt.inverted',
      _hover: {
        bg: 'btn.darkHover',
        color: 'txt.inverted',
        _disabled: {
          bg: 'btn.dark',
        },
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    brand: {
      bg: 'btn.brand',
      border: '1px solid',
      borderColor: 'transparent',
      color: 'txt.inverted',
      _hover: {
        bg: 'btn.brandHover',
        borderColor: 'border.primary',
        color: 'txt.inverted',
        _disabled: {
          bg: 'btn.brandDisabled',
          borderColor: 'transparent',
          color: 'txt.inverted',
        },
      },
      _disabled: {
        bg: 'btn.brandDisabled',
      },
    },
    outline: {
      border: '1px solid',
      borderColor: 'border.primary',
      bg: 'btn.light',
      color: 'txt.primary',
      _hover: {
        bg: 'btn.lightHover',
        color: 'txt.inverted',
        borderColor: 'border.active',
        _disabled: {
          bg: 'btn.lightDisabled',
          borderColor: 'border.muted',
          color: 'txt.primary',
        },
      },
      _disabled: {
        bg: 'btn.lightDisabled',
        borderColor: 'border.muted',
        color: 'txt.muted',
      },
    },
    ghost: {
      color: 'txt.primary',
      fontWeight: 'normal',
      _active: {
        bg: 'transparent',
      },
      _hover: {
        bg: 'transparent',
        color: 'txt.primary',
      },
      _disabled: {
        color: 'txt.muted',
      },
    },
    link: {
      borderRadius: 'none',
      color: 'txt.link',
      fontWeight: 'normal',
      minW: 'auto',
      textDecoration: 'underline',
      textTransform: 'none',
      _hover: {
        color: 'txt.primary',
        _disabled: {
          textDecoration: 'underline',
        },
      },
      _disabled: {
        color: 'txt.muted',
      },
    },
    unstyled: {
      d: 'flex',
      borderRadius: 'none',
      fontWeight: 'normal',
      h: 'auto',
      minW: 'auto',
    },
  },
  defaultProps: {
    size: '',
  },
};
