import React from 'react'
import Sonic from '../../assets/SonicIcon.svg'
import downloadIcon from '../../assets/DownloadIcon.svg'

const Header = () => {
  return (
    <div className='header-bg'>
      {/* container section */}
      <section
        className='max-w-7xl mx-auto flex
       flex-col justify-around h-[100vh]'
      >
        {/* icon section */}
        <div className='flex items-center justify-center  '>
          <img src={Sonic} alt='' className='w-40 h-16 md:w-72 md:h-20' />
        </div>
        {/* blank div */}
        <div></div>
        <div></div>
        {/* download content */}
        <div
          className='flex flex-row gap-2 md:gap-8
         items-center pl-3 md:pl-[119px]'
        >
          <p className='font-Phudu font-semibold text-[24px] md:text-[56.24px]  text-white_text  leading-[41.8px] md:leading-[61.86px]'>
            Download Sonik
          </p>
          <figure>
            <img
              src={downloadIcon}
              alt=''
              className=' h-[34.28px] md:h-[52.41px] w-[34.28px] md:w-[52.41px]'
            />
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Header
