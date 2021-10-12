module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'blue-gray-1': '#C5E4E7',
				'blue-gray-2': '#7F9C9F',
				'blue-gray-3': '#5E7A7D',
				'white-gray': '#FAFAFA',
				'teal-new': '#00494D',
				'regal-gray': '#F4FAFA',
				'regal-green': '#26C0AB',
				'green-new': '#5EEAD4',
			},
		},
		fontFamily: {
			space: ['Space Mono'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
