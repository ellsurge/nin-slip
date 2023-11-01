'use client'
import React from 'react';
export default function Print() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='ide'>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}
