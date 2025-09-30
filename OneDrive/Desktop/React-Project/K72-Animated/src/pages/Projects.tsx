import { Link } from "react-router-dom"

const Projects = () => {
    
    function changeRoute(){
       <Link to='/Projects' />
    }

  return (
    <div>
        <button onClick={() => changeRoute()}>Projects</button>
    </div>
  )
}

export default Projects