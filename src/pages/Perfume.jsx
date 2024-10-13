
import DefaultLayout from '../layouts/DefaultLayout';
import ReactPlayer from 'react-player/youtube';

const link = 'https://www.youtube.com/watch?v=0dFz10R529g&list=RDkebwTsRZ7bs&index=2&ab_channel=GarethEmery'

import video from '../assets/perfumeImages/video.mp4'

const Perfume = () => {
  return (
    <div className='w-screen'>
        <DefaultLayout>

            <div className='bg-sec1 lg:bg-pc_sec1 w-full h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center text-yellow-500 font-jose text-5xl lg:text-9xl'>
              Golden Gold
            </div>
            
            <div className='bg-sec2 bg-fixed w-full lg:bg-pc_sec2 h-screen bg-no-repeat bg-cover flex justify-center lg:justify-end items-center text-black font-jose text-5xl lg:text-6xl p-5'>
              En la expasion <br/>
              hay brillo
            </div>
            
              <div className='flex items-center justify-center'>
                <video autoPlay loop muted >
                  <source src={video} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>

            <div className='bg-sec2 bg-fixed lg:bg-pc_sec2 w-full h-screen bg-no-repeat bg-cover flex justify-center lg:justify-start items-center text-black font-jose text-5xl lg:text-6xl p-5'>
              Abrazo Frutado
            </div>

            <div className='bg-sec4 lg:bg-pc_sec3 w-screen h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center text-yellow-500 font-jose text-5xl'>
              Golden Gold
            </div>


        </DefaultLayout>



    </div>
  )
}

export default Perfume