import { LoaderCircle } from 'lucide-react';
import React from 'react';

export default function Loading() {
  return (
    <div className='flex flex-1 justify-center items-center'>
      <LoaderCircle className='animate-spin'/>
    </div>
  );
}
