import React from 'react';

const TextComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-32">
      <div className="text-gray-700 text-2xl mb-4 md:text-6xl lg:text-8xl">Your Partner for</div>
        <h3 className='text-3xl md:text-8xl lg:text-10xl'><span className='text-textHighlight'> Excellence </span></h3>
        <h3 className='text-3xl md:text-8xl lg:text-10xl'>and <span className='text-textHighlight'>Innovation</span></h3>
    </div>
  );
};

export default TextComponent;