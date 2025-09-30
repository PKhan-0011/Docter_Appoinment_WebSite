
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agenes = () => {
      
  const imageDivRef = useRef(null); // isse mai samjh le image wala div pakd lunga okh. abb aage ki chize hongi like 
  const imageRef = useRef<HTMLImageElement | null>(null);    // ye jo hoga abb ye hai imageRef for changeing images wile scrolling...

  // Yha p array banega ek okkh!...

  const imagesArray: string[] = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
  
  

  gsap.registerPlugin(ScrollTrigger);
    
   useGSAP(function(){
      gsap.to(imageDivRef.current , {
         scrollTrigger: {
            trigger: imageDivRef.current,
            markers: true,
            start: 'top 36%',
            end: 'top -70%',
            scrub: true,
            pin: true,
            onUpdate: function(elem){
                let imageIndex;
                if(elem.progress < 1){
                    imageIndex = Math.floor(elem.progress*imagesArray.length)
                }
                else{
                   imageIndex = imagesArray.length - 1;
                }
                 // @ts-ignore
                imageRef.current.src = imagesArray[imageIndex]
            }
         }
         // yha p animation bhi lagenge okkh!...
      });
   });

  return (
     
    <div>
       <div className="section1">

          <div ref = {imageDivRef} className="h-[20vw] w-[15vw] bg-red-700 absolute rounded-3xl left-[30vw] overflow-hidden -mt-[20vh]">
              <img ref = {imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
          </div>
          
        <div className="font-semibold relative">
         <div className="mt-[55vh] text-center">
               <h1 className="text-[16vw] uppercase leading-[17vw]">Soixan7e <br /> Douze</h1>
         </div>
         <div className="flex justify-end">
              <div className="pl-10  w-1/2 flex flex-col justify-end mt-15">
            <p className="text-4xl ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
         </div>
         </div>
       </div>
     </div>

     <div className="section2">
       
       
     </div>
            
     </div>
  )
}

export default Agenes;



//K72 is an agency that builds brands from every angle. Today, tomorrow and years 
// from now. We think the best sparks fly when comfort zones get left behind and 
// friction infuses our strategies, brands and communications with real feeling. 
// We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.