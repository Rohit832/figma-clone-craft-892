import React from 'react';

interface FeatureCardProps {
  image: string;
  altText: string;
  title: string;
  isNumbered?: boolean;
  numberText?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  image, 
  altText, 
  title, 
  isNumbered = false, 
  numberText 
}) => {
  return (
    <div className="flex flex-col items-center relative max-sm:mb-5">
      <img
        src={image}
        alt={altText}
        className="w-[105px] h-[105px]"
      />
      {isNumbered && numberText && (
        <div className="text-5xl font-bold text-black text-center absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
          {numberText}
        </div>
      )}
      <div 
        className="text-xl font-medium text-black text-center mt-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default FeatureCard;
