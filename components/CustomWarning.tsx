import React from 'react';

type props ={
  text: string
}

export const CustomWarning = ({ text }: props) => {
  return (
    <div className='bg-red-500 text-white mb-4 p-5' >{text}</div>
  );
};
