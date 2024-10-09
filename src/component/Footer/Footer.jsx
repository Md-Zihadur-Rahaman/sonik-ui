import React from 'react'
import Sonic from '../../assets/SonicIcon.svg'
import Insta from '../../assets/Instagram.svg'

const Footer = () => {
  return (
    <div className='bg-black'>
      <footer className='footer-bg max-w-7xl p-6 md:p-0'>
        {/* main container section */}
        <section className='flex flex-col gap-4 md:flex-row  md:justify-between md:pt-12  md:pl-10 md:pr-32'>
          {/* icon */}
          <figure className='flex'>
            <img src={Sonic} alt='' />
          </figure>
          {/* middle */}
          <div className='flex flex-col  gap-2 md:gap-4'>
            <p className='text-left text-base font-Inter text-white_text font-bold'>
              Site Menu
            </p>
            <a
              href='#'
              className='text-left underline font-Inter font-normal text-sm text-white_text/65   '
            >
              Home
            </a>
          </div>
          {/*right */}
          <aside className='flex flex-col gap-2 md:gap-4 '>
            <p className='text-left text-base font-Inter text-white_text font-bold'>
              Social Icons
            </p>
            <a href='#' className=''>
              <img src={Insta} alt='' />
            </a>
          </aside>
        </section>
        {/* Terms & Conditions | Privacy Policy section */}
        <section className='flex justify-normal gap-1    md:justify-center py-10'>
          <a
            href='#'
            className='text-left underline font-Inter font-normal text-xs md:text-base text-dark_gray_text   '
          >
            Terms & Conditions
          </a>
          <p className='text-left  font-Inter font-normal text-xs md:text-base text-dark_gray_text   '>
            |
          </p>
          <a
            href='#'
            className='text-left underline font-Inter font-normal text-xs md:text-base text-dark_gray_text  '
          >
            Privacy Policy
          </a>
        </section>
      </footer>
    </div>
  )
}

export default Footer
