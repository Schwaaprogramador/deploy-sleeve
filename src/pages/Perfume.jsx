
import DefaultLayout from '../layouts/DefaultLayout';
import ReactPlayer from 'react-player/youtube';
import { NavLink } from "react-router-dom";
const link = 'https://www.youtube.com/watch?v=0dFz10R529g&list=RDkebwTsRZ7bs&index=2&ab_channel=GarethEmery'

import videopc from '../assets/news/videopc.mp4'

const Perfume = () => {

  const idPerfume = 'gid://shopify/Product/7193276514394'
  const uri = encodeURIComponent(idPerfume);


  return (
    <div className='w-screen'>
        <DefaultLayout>

            <div className='bg-sec1 lg:bg-pc_sec1 w-full h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center text-yellow-500 font-jose text-5xl lg:text-9xl'>
              Golden Gold
            </div>
            
            <div className='bg-sec2 bg-fixed w-full lg:bg-pc_sec2 h-screen bg-no-repeat bg-cover flex justify-center lg:justify-end items-center '>
              <div className='flex flex-col items-center justify-center lg:mr-24'>
              <p className='text-black font-lato text-5xl lg:text-5xl p-8'>
                En la expansión <br/>
                hay brillo

              </p>
              
              <NavLink to={`/productDetail/${uri}`} className='flex justify-center items-center border-2 font-lato p-2 text-white bg-white/20'>               
                Comprar Ahora                
              </NavLink>
              </div>
            </div>
            
              <div className='flex items-center justify-center'>
                {/* //controls */}
                <video autoPlay loop muted className='lg:w-screen'>
                  <source src={videopc} type="video/mp4"/>
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>

            <div className='bg-sec2 bg-fixed lg:bg-pc_sec2 w-full h-screen bg-no-repeat bg-cover flex justify-center lg:justify-start items-center '>
            <div className='flex flex-col items-center justify-center lg:mr-24'>
             <p className='text-black font-lato text-5xl lg:text-6xl p-5'> Abrazo Frutado </p>
              <NavLink to={`/productDetail/${uri}`} className='flex justify-center items-center border-2 border-black font-lato p-2 text-black lg:bg-black/20'>               
                Comprar Ahora               
              </NavLink>
              
            </div>
            </div>

            <div className='bg-sec4 lg:bg-pc_sec3 w-screen h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center text-yellow-500 font-jose text-5xl lg:text-9xl'>
              Golden Gold
            </div>


        </DefaultLayout>



    </div>
  )
}

export default Perfume