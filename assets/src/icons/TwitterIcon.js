import { Icon } from '@chakra-ui/react';

const TwitterIcon = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 34 34" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <circle cx="16" cy="16" r="16" stroke="#000" strokeWidth="2" />
        <path
          fill="#000"
          fillRule="nonzero"
          d="M22.355 13.24c.011.142.011.284.011.427 0 4.336-3.3 9.333-9.33 9.333A9.262 9.262 0 018 21.527c.264.031.518.04.792.04a6.566 6.566 0 004.07-1.4 3.285 3.285 0 01-3.065-2.276c.203.03.407.05.62.05.294 0 .588-.04.862-.11a3.28 3.28 0 01-2.629-3.22v-.04a3.3 3.3 0 001.482.416 3.278 3.278 0 01-1.462-2.732c0-.61.162-1.168.446-1.656a9.32 9.32 0 006.762 3.433 3.738 3.738 0 01-.081-.752 3.279 3.279 0 013.28-3.28 3.27 3.27 0 012.395 1.036 6.455 6.455 0 002.081-.792 3.271 3.271 0 01-1.441 1.808A6.571 6.571 0 0024 11.544a7.05 7.05 0 01-1.645 1.696z"
        />
      </g>
    </Icon>
  );
};

export default TwitterIcon;
