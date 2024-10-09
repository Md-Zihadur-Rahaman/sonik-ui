import React from 'react'
import mobile from '../../assets/Mobile-1.svg'
import mobileI from '../../assets/Mobile-2.svg'
import Apple from '../../assets/AppStore.svg'
import ios from '../../assets/IOS.svg'
import Play from '../../assets/Playstore.svg'
import ANDROID from '../../assets/Android.svg'
import Earth from '../../assets/Earth.svg'
import Music from '../../assets/Music.svg'
import Star from '../../assets/star.svg'
import Love from '../../assets/Love.svg'
import SonicBlue from '../../assets/SIcon.svg'
import QR from '../../assets/BarCode.svg'
import Search from '../../assets/Search-outline.svg'
import UptoDate from '../../assets/trending-up-outline.svg'
import Ticket from '../../assets/ticket-outline.svg'
import App from '../../App'

const Banner = () => {
  return (
    <div className='bg-black/90 banner-bg  pt-16 md:pt-[261px] pb-[90.96px] '>
      {/* main banner section */}
      <section className='max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-36 md:gap-20'>
        {/* left section */}
        <aside className='w-full md:w-1/2 relative bg-black rounded-[27.29px] p-4 md:pt-[40px] md:pb-[90px] md:pl-[47px] md:pr-[159px]'>
          <figure
            className='absolute -top-16 md:-top-40            
           right-0 md:-left-8  w-24 h-24 md:h-full md:w-full'
          >
            <img src={Love} alt='' />
          </figure>
          <figure className=''>
            <img src={mobile} alt='' />
          </figure>
          <figure
            className='absolute top-36 md:top-24
           left-12 md:left-32'
          >
            <img src={mobileI} alt='' />
          </figure>
          <figure
            className='absolute -bottom-16  md:-bottom-8            
          -left-0  md:-left-8  w-24 h-24 md:w-32 md:h-32n'
          >
            <img src={Star} alt='' />
          </figure>
        </aside>
        {/* right section */}
        <section className='w-full md:w-1/2 flex flex-col justify-center relative p-4 md:p-0'>
          <figure className='absolute right-0 -top-14 md:-top-36 w-24 h-24 md:w-36 md:h-36'>
            <img src={Earth} alt='' />
          </figure>
          <h1 className='text-left font-Phudu font-semibold text-[30px] md:text-[58.21px]  text-white_text  leading-[49.5px] md:leading-[64.04px]'>
            Your city’s Entertainment all in one place
          </h1>
          <p className='text-left font-Inter font-normal text-[18px] text-white_text  leading-[24.08px] mt-8'>
            Discover your favorite events with ease
          </p>
          <div className='flex flex-row gap-2 md:gap-7 mt-28'>
            <div className='bg-dark_gray rounded-[23.96px] flex justify-center items-center gap-4 px-2 md:px-8  py-2 '>
              <figure>
                <img src={ios} alt='' />
              </figure>

              <p className='font-Inter font-normal text-sm md:text-[23.96px] text-center  text-white_text  leading-[35.94px]'>
                IOS
              </p>
            </div>
            <div className='bg-dark_gray rounded-[23.96px] flex justify-center items-center gap-4 px-3 py-2 '>
              <figure>
                <img src={ANDROID} alt='' />
              </figure>
              <p className='font-Inter font-normal text-sm md:text-[23.96px] text-center  text-white_text  leading-[35.94px]'>
                ANDROID
              </p>
            </div>
          </div>
          <figure className='absolute left-0 md:left-40 -bottom-32 md:-bottom-10 w-24 h-24 md:w-32 md:h-32 '>
            <img src={Music} alt='' />
          </figure>
        </section>
      </section>

      {/* apps section */}
      <section className=' my-32 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 bg-black/50 p-4 md:p-10'>
        {/* figure */}
        <figure className='w-full md:w-3/12 flex justify-center'>
          <img src={SonicBlue} alt='' />
        </figure>
        {/* middle section  */}
        <article className='w-full md:w-6/12 flex flex-col gap-5'>
          <h1 className='text-left font-Phudu font-semibold text-[30px] md:text-[40.21px]  text-white_text  leading-[49.5px] md:leading-[45.04px]'>
            Discover more with the app
          </h1>
          {/* find */}
          <div className='flex items-center gap-4 '>
            <figure>
              <img src={Search} alt='' />
            </figure>

            <p className='text-left font-Inter font-normal text-base text-white_text/65   '>
              Find events in your city
            </p>
          </div>
          {/* up to date */}
          <div className='flex items-center gap-4 '>
            <figure>
              <img src={UptoDate} alt='' />
            </figure>

            <p className='text-left font-Inter font-normal text-base text-white_text/65   '>
              Stay up to date, save and share events
            </p>
          </div>
          {/* ticket */}
          <div className='flex items-center gap-4 '>
            <figure>
              <img src={Ticket} alt='' />
            </figure>

            <p className='text-left font-Inter font-normal text-base text-white_text/65   '>
              Stay up to date, save and share events
            </p>
          </div>
        </article>
        {/* app section */}
        <aside className='w-full md:w-3/12 flex flex-col items-center gap-4'>
          <figure>
            <img src={QR} alt='' />
          </figure>
          <div className='flex items-center gap-4 '>
            <p className='text-left font-Inter font-normal text-sm text-white_text/65   '>
              Available at:
            </p>
            <figure>
              <img src={Apple} alt='' />
            </figure>
            <figure>
              <img src={Play} alt='' />
            </figure>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Banner
