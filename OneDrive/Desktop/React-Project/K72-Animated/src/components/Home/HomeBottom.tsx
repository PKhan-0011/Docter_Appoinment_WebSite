import {Link} from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className=' flex items-center justify-center gap-5 mb-5'> 
           <div className='border-3 h-14 lg:h-24 hover:border-[#D3FD50] hover:text-[#D3FD50] items-center justify-center px-10 border-white rounded-full uppercase'>
                 <Link to='/Projects' className='text-[4vw] mt-2'>Projects</Link>
           </div>
          <div className='border-3 h-14  lg:h-24 hover:border-[#D3FD50] hover:text-[#D3FD50] items-center justify-center px-10 border-white rounded-full uppercase'>
                <Link to='/Agenes' className='text-[4vw] mt-2'>Agence</Link>
          </div>
    </div>
  )
}

export default HomeBottom 