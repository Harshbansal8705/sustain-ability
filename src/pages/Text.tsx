import React from 'react';

const TextComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-32">
      <div className="text-gray-700 text-2xl mb-4 md:text-6xl lg:text-8xl">Your partner for</div>
        <h3 className='text-3xl md:text-8xl lg:text-10xl'>Making profit <span className='text-textHighlight'>predictable.</span></h3>
    </div>
  );
};

export default TextComponent;