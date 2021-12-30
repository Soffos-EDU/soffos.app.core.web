import { Icon } from '@chakra-ui/react';

const FacebookLoginIcon = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 21 21" {...props}>
      <defs>
        <path id="a" d="M.001.001h20.726v20.722H.001z" />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(.182 .182)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill="#fff"
          d="M20.727 10.425C20.727 4.667 16.087 0 10.364 0 4.64 0 0 4.667 0 10.425c0 5.203 3.79 9.516 8.744 10.298v-7.285H6.113v-3.013h2.631V8.128c0-2.613 1.548-4.056 3.915-4.056 1.134 0 2.32.204 2.32.204V6.84h-1.307c-1.288 0-1.689.804-1.689 1.628v1.956h2.874l-.46 3.013h-2.414v7.285c4.954-.782 8.744-5.095 8.744-10.298"
          mask="url(#b)"
        />
        <path
          fill="#4267B2"
          d="M14.7 13.499l.453-2.94h-2.83V8.653c0-.804.396-1.588 1.663-1.588h1.287V4.562s-1.168-.198-2.284-.198c-2.33 0-3.853 1.407-3.853 3.956v2.24h-2.59v2.939h2.59v7.105a10.338 10.338 0 003.188 0v-7.105H14.7"
        />
      </g>
    </Icon>
  );
};

export default FacebookLoginIcon;
