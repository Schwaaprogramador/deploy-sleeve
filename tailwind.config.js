/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"jose": ['JosefinSans'],
				"lato": ['Lato'],
				"path": ['PathwayGothicOne'],
			  },
			  backgroundImage: {
				"landingBackgroundMobile":"url('/src/assets/landingImages/fondovibes_landing.jpg')",
				"landingBackgroundPC":"url('/src/assets/landingImages/pc_landing.jpg')",
				// ------HOME BACKGROUNDS--------
				"homeInscribete":"url('/src/assets/news/inscribete.jpg')",
				"homeFirtsSection":"url('/src/assets/news/shopnow.jpg')",
				"homeSecondSection":"url('/src/assets/news/boutique.jpg')",
				"homeThirdSection":"url('/src/assets/news/joyeria.jpg')",
				"homeFourSection":"url('/src/assets/news/perfume.jpg')",
				"homeFiveSection":"url('/src/assets/homeImages/five_section.jpg')",
				"homePCFirtsSection": "url('/src/assets/homeImages/pcFirts_section.jpg')",
				"homePCSecondSection":"url('/src/assets/homeImages/pc_boutique.jpg')",
				"homePCThirdSection":"url('/src/assets/homeImages/pc_joyeria.jpg')",
				"homePCFourSection":"url('/src/assets/homeImages/pc_perfume.jpg')",
				"homePCFiveSection":"url('/src/assets/homeImages/pc_agendatucita.jpg')",
				
				// ------FOOTER BACKGROUNDS--------
				"footerMobile":"url('/src/assets/homeImages/agendacita_section.jpg')",
				"footerPC":"url('/src/assets/homeImages/pc_footer_fondo.jpg')",

				// ------BOUTIQUE BACKGROUNDS--------
				"boutique":"url('/src/assets/news/accesorios.jpg')",
				"croche":"url('/src/assets/news/crochet.jpg')",
				"newin":"url('/src/assets/news/newin.jpg')",
				"seamless":"url('/src/assets/news/seamless.jpg')",
				"undies":"url('/src/assets/news/undies.jpg')",
				"pc_accesorios": "url('/src/assets/boutiqueImages/pc_accesorios.jpg')",
				"pc_croche": "url('/src/assets/boutiqueImages/pc_croche.jpg')",
				"pc_new-in": "url('/src/assets/boutiqueImages/pc_new-in.jpg')",
				"pc_seamless": "url('/src/assets/boutiqueImages/pc_seamless.jpg')",
				"pc_undies": "url('/src/assets/boutiqueImages/pc_undies.jpg')",

				// ------JOYERIA BACKGROUNDS--------
				"joyeria":"url('/src/assets/news/joyeria2.jpg')",
				"joyeria-alta":"url('/src/assets/news/altaJoyeria.jpg')",
				"cuidadojoyas":"url('/src/assets/news/cuidadojoyas.jpg')",
				"pc_joyeria-alta":"url('/src/assets/joyeriaImages/pc_altajoyeria.jpg')",
				"pc_joyeria":"url('/src/assets/joyeriaImages/pc_joyeria.jpg')",

				// ------PERFUME BACKGROUNDS--------
				"sec1":"url('/src/assets/perfumeImages/secbanner1.jpg')",
				"sec2":"url('/src/assets/perfumeImages/secbanner2.jpg')",
				"sec3":"url('/src/assets/news/videomobile.jpg')",
				"secV":"url('/src/assets/news/videopc.jpg')",
				"sec4":"url('/src/assets/perfumeImages/carrusel1.jpg')",
				"pc_sec1":"url('/src/assets/perfumeImages/pc_banner1.jpg')",
				"pc_sec2":"url('/src/assets/perfumeImages/pc_sec2.jpg')",
				"pc_sec3":"url('/src/assets/perfumeImages/pc_carrusel1.jpg')",				

			  },
			  colors:{
				"principal":"#009cde",
				"segundario":"#407EC9",
				"tercero": "#fffafa",
			  }
			},
		
		},
	
	plugins: [],
}
