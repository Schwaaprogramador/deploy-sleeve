
import DefaultLayout from '../layouts/DefaultLayout';
import ReactPlayer from 'react-player/youtube';
import { NavLink } from "react-router-dom";
const link = 'https://www.youtube.com/watch?v=0dFz10R529g&list=RDkebwTsRZ7bs&index=2&ab_channel=GarethEmery'

import video from '../assets/perfumeImages/video.mp4'



const Perfume = () => {

  const idPerfume = 'gid://shopify/Product/7193276514394'
  const uri = encodeURIComponent(idPerfume);


  return (
    <div className='w-screen'>
        <DefaultLayout>

            <div className='bg-sec1 lg:bg-pc_sec1 w-full h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center text-yellow-500 font-jose text-5xl lg:text-9xl'>
              Golden Gold
            </div>
            
            <div className='bg-sec2 bg-fixed w-full lg:bg-pc_sec2 h-screen bg-no-repeat bg-cover flex justify-center lg:justify-end items-center text-black font-jose text-5xl lg:text-6xl p-5'>
              En la expasión <br/>
              hay brillo
              <NavLink to={`/productDetail/${uri}`} className='flex flex-col items-center gap-3'>               
                comprar ahora                
              </NavLink>
            </div>
            
              <div className='flex items-center justify-center'>
                <video autoPlay loop className='h-screen'>
                  <source src={video} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>

            <div className='bg-sec2 bg-fixed lg:bg-pc_sec2 w-full h-screen bg-no-repeat bg-cover flex justify-center lg:justify-start items-center text-black font-jose text-5xl lg:text-6xl p-5'>
             <p> Abrazo Frutado </p>
              <NavLink to={`/productDetail/${uri}`} className='flex flex-col items-center gap-3'>               
                comprar ahora                
              </NavLink>
              
            </div>

            <div className='bg-sec4 lg:bg-pc_sec3 w-screen h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center text-yellow-500 font-jose text-5xl lg:text-9xl'>
              Golden Gold
            </div>


        </DefaultLayout>



    </div>
  )
}

export default Perfume