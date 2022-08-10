import React from "react";

interface PageHeaderProp {
  title: string;
  subTitle: string;
}

const PageHeader: React.FC<PageHeaderProp> = ({ title, subTitle }) => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto py-14 px-6 sm:px-0 flex justify-center'>
        <div className='columns-5xl py-0 sm:py-20 text-center px-0 md:px-14'>
          <p className='text-gray-200 uppercase mb-8 text-sm sm:text-base'>
            {subTitle}
          </p>
          <h1 className='title-with-line before:left-1/2 before:translate-x-2/1'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
