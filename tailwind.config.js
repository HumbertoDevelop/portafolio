/** @format */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/img/default.png')",
				'footer-texture': "url('/img/footer-texture.png')",
			  }
		},
		screens: {
			smx2: "320px",
			// => @media (min-width: 320px) { ... }

			smx1: "425px",
			// => @media (min-width: 425px) { ... }

			sm: "576px",
			// => @media (min-width: 576px) { ... }

			mdx1: "768px",
			// => @media (min-width: 768px) { ... }
			
			md: "960px",
			// => @media (min-width: 960px) { ... }

			lgx1: "1024px",
			// => @media (min-width: 1440px) { ... }
		
      lg: "1440px",
			// => @media (min-width: 1440px) { ... }
		},
	},
	plugins: [],
};
