
//---Iconos
import iconOjo from "../assets/landingImages/ojo_landing.png";
import iconIg from "../assets/landingImages/ig.png";
import iconTiktok from "../assets/landingImages/tiktok.png";


const Landing = () => {
  return (
	<main class="bg-landingBackgroundMobile lg:bg-landingBackgroundPC bg-cover bg-no-repeat h-screen w-screen">

		<div class="flex flex-col xl:flex-row-reverse items-center justify-around h-full xl:px-40 xl:py-40">

			<a href="/home" class="flex flex-col items-center">
				<img src={iconOjo} alt="ojo sleeve icon" class="w-52 xl:w-[400px]"/>
				<p class="text-white font-jose xl:text-4xl">Welcome to shyne</p>
			</a>
			
	
			<div class="flex flex-col w-full items-start p-2">
				<div class=" flex xl:flex-row items-center">
					<img src={iconIg} alt="icono de facebook" class="w-11 xl:w-24"/>
					<p class="text-white font-jose">@sleevejoyeria</p>
				</div>
				<div class=" flex xl:flex-row items-center">
					<img src={iconIg} alt="icono de instagram" class="w-11 xl:w-24"/>
					<p class="text-white font-jose">@sleeveconcept</p>
				</div>
				<div class=" flex xl:flex-row items-center">
					<img src={iconTiktok} alt="icono de tiktok" class="w-11 xl:w-24"/>
					<p class="text-white font-jose">@sleeveboutique</p>
				</div>
			</div>
	
			<a href="/home" class="xl:hidden"> 
				<div class="flex items-center justify-center bg-gray-500/50 p-4 rounded-3xl">
					<p class="font-jose text-white text-4xl">WELCOME</p>
				</div>
			</a>
		</div>
	</main>
  )
}

export default Landing
