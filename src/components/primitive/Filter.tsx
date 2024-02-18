import React, { useEffect, useState } from 'react';
interface Option {
    value: string;
    title: string;
  }

interface CustomFilterProps {
  options: Option[];
  setState: any
  selected: any
}

export const CustomFilter: React.FC<CustomFilterProps> = ({ options, setState, selected }) => {
   console.log(selected)

  return (
      <div  className="flex flex-row h-fit items-center gap-6">
        {options.map((option: any, index: any) => (
          <button
            key={index}
            onClick={() => setState(option.value)}
            style={{
              backgroundColor: selected === option.value ? 'white' : 'transparent',
            }}
            className="w-fit h-fit text-base py-2 px-6 rounded-xl  whitespace-nowrap"
          >
            {option.title}
          </button>
        ))}
      </div>
  );
};


//   return <CustomFilter options={options} optionValues={optionValues} arrayToSort={dataToSort}re />;
// };

