'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="hidden cursor-pointer md:block"
      height={100}
      width={100}
      src={'/images/logo.png'}
    />
  );
};

export default Logo;
