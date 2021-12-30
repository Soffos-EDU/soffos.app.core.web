import { Icon } from '@chakra-ui/react';

const FacebookIcon = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 34 34" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <circle cx="16" cy="16" r="16" stroke="#000" strokeWidth="2" />
        <path
          fill="#000"
          fillRule="nonzero"
          d="M19.632 17l.45-2.896h-2.82v-1.878c0-.792.393-1.565 1.657-1.565h1.283V8.196S19.038 8 17.925 8c-2.323 0-3.842 1.387-3.842 3.898v2.206H11.5V17h2.583v7h3.179v-7h2.37z"
        />
      </g>
    </Icon>
  );
};

export default FacebookIcon;
