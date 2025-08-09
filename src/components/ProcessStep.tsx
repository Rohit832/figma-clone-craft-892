import React from 'react';

interface ProcessStepProps {
  icon: string;
  title: string;
  backgroundColor: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, backgroundColor }) => {
  return (
    <div className={`flex border shadow-[3px_4px_0_0_#000] opacity-90 ${backgroundColor} mb-4 px-7 py-[22px] rounded-lg border-solid border-black max-sm:px-5 max-sm:py-[18px]`}>
      <div className="flex items-center gap-[17px]">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: icon,
            }}
          />
        </div>
        <div className="text-xl font-bold text-black max-sm:text-lg">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
