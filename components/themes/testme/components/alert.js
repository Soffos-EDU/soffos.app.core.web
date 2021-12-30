export default {
  baseStyle: {
    container: {
      pl: 3,
      pr: 5,
      alignItems: 'flex-start',
      bg: 'bg.primary',
      _before: {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      },
    },
    icon: {
      boxSize: '16px',
      mr: 2,
      pos: 'relative',
      top: '4px',
    },
  },
  variants: {
    error: {
      container: {
        _before: {
          bg: 'bg.error',
        },
      },
      icon: {
        color: 'alert.error',
      },
    },
    success: {
      container: {
        _before: {
          bg: 'bg.success',
        },
      },
      icon: {
        color: 'alert.success',
      },
    },
    warning: {
      container: {
        _before: {
          bg: 'bg.warning',
        },
      },
      icon: {
        color: 'alert.warning',
      },
    },
    info: {
      container: {
        _before: {
          bg: 'bg.info',
        },
      },
      icon: {
        color: 'alert.info',
      },
    },
  },
};
