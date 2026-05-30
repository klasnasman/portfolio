import React from 'react';

const Tree: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' width='20' height='20' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Zm4 0v3'
      ></path>
    </svg>
  );
};

export default Tree;
