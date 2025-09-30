
import Video from './video';

const HomeTop = () => {
  return (
    <div className="text-center pt-5">
          <div className="text-[9.5vw] capitalize tracking-tight  leading-none justify-center items-center">L'étincelle</div>
          <div className="text-[9.5vw] capitalize  flex items-start justify-center leading-none  ">qui <div className=' h-[6vw] mt-6 lg:mt-12 w-[14vw] rounded-lg overflow-hidden  '> <Video/> </div> génère</div>
          <div className="text-[9.5vw] capitalize tracking-tight  leading-none ">la créativite</div>
    </div>
  )
}

export default HomeTop


// ek hota hai tracking tight jisse hamm horizantaly bta pate hai ki isme koi spaceing nahi hogi okkh. 
// And from verticaly spaceing htani pade to hamm leading-none kar denge okkh!..