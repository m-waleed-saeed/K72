import Video from './Video'

const HomeTopText = () => {
  return (
    <div className='font-[primary] pt-15 lg:pt-5 text-center'>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>L'étincelle</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>qui <div className='h-[7vw] w-[16vw] -mt-1 rounded-full overflow-hidden z-10'><Video /></div> genere</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>la creativité</div>
    </div>
  )
}

export default HomeTopText