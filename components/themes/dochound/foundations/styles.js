const styles = {
  global: {
    'html, body': {
      fontSize: 'md',
      color: 'txt.primary',
      lineHeight: 'normal',
      minHeight: '100vh',
      padding: '0',
      width: '100%',
    },
    '*, *::before, ::after': {
      borderColor: 'border.decorative',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    '.js-focus-visible :focus:not([data-focus-visible-added])': {
      outline: 'none',
      boxShadow: 'none',
    },
  },
};

export default styles;
