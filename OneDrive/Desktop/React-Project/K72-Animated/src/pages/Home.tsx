
import Video from '../components/Home/video';
import HomeBottom from '../components/Home/HomeBottom';
import HomeTop from '../components/Home/HomeTop';

const Home = () => {

  return (
    <div>
          <div className="h-screen w-screen fixed">
                 <Video />
          </div>

            <div className='h-screen w-screen relative flex flex-col justify-between'>
                   <HomeTop />
                   <HomeBottom />
            </div> 
    </div>
  )
}

export default Home