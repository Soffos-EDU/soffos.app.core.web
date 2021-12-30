import { Icon } from '@chakra-ui/react';

const YoutubeIcon = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 34 34" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <circle cx="16" cy="16" r="16" stroke="#000" strokeWidth="2" />
        <path
          fill="#000"
          fillRule="nonzero"
          d="M23.666 11.706c-.184-.77-.727-1.376-1.415-1.582C21.003 9.75 16 9.75 16 9.75s-5.003 0-6.251.374c-.688.206-1.23.812-1.415 1.582C8 13.1 8 16.013 8 16.013s0 2.911.334 4.306c.184.77.727 1.351 1.415 1.557 1.248.374 6.251.374 6.251.374s5.003 0 6.251-.374c.688-.206 1.23-.787 1.415-1.557.334-1.395.334-4.306.334-4.306s0-2.912-.334-4.307zm-9.302 6.95v-5.287l4.181 2.644-4.181 2.643z"
        />
      </g>
    </Icon>
  );
};

export default YoutubeIcon;
