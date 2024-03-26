import { IconProps } from './';

const Search = ({ color, ...props }: IconProps): JSX.Element => {
  const fillColor = color || '#fff';
  return (
    <svg
      width="15"
      height="15"
      focusable="false"
      enable-background="new 0 0 20 20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Search"
      className="coveo-search-button-svg"
      {...props}
    >
      <title>Search</title>
      <g fill={fillColor}>
        <path
          className="coveo-magnifier-circle-svg"
          d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793"
        ></path>
        <path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377"></path>
      </g>
    </svg>
  );
};

export default Search;
