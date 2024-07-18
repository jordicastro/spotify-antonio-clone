"use client";

import Box from '@/components/Box';
import React from 'react'

const Error = () => {
  return (
    <Box
        className='h-full flex items-center justify-center border border-slate-500'
    >
        <div
            className='text-neutral-400'
        >
            Something went wrong
        </div>
    </Box>
  );
};

export default Error