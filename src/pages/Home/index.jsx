import Video from './Video'
import HomeTopText from './HomeTopText'
import HomeBottomText from './HomeBottomText'

const Home = () => {
    return (
        <div className='text-white'>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='h-screen w-screen relative flex flex-col justify-between pb-5 overflow-hidden'>
                <HomeTopText />
                <HomeBottomText />
            </div>
        </div>
    )
}

export default Home