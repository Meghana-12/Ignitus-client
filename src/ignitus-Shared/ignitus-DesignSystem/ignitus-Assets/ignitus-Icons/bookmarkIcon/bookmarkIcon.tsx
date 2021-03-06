import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const BookmarkIcon = ({title = 'Bookmark Icon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
			viewBox="0 0 384 512"
      {...rest}
    >
      <title>{title}</title>
			<path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"/>
			</svg>
	)
};

export default BookmarkIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
