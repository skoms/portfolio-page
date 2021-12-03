export interface Project {
	title: string
	description: string
	picture: string
	links: ProjectLinks
	technologies: Tech[]
}

export interface ProjectLinks {
	repo: string
	backendRepo?: string
	demo?: string
}

export interface Tech {
	name: string
	iconLink: string
}

export const PROJECTS: Project[] = [
	{
		title: "Researcher's Refuge",
		description:
			'This website is a social media inspired by Reddit and LinkedIn. It is a fullstack application with this front-end client, and a back-end REST API with a relational PostgreSQL Database. Here anyone can read and write study articles and other research papers, also allowing them to follow each other and accredit / discredit articles.',
		picture: '/images/researchers-refuge.png',
		links: {
			repo: 'https://github.com/skoms/researchers-refuge',
			backendRepo: 'https://github.com/skoms/researchers-refuge-api',
			demo: 'https://researchers-refuge.herokuapp.com/',
		},
		technologies: [
			{
				name: 'React',
				iconLink: '/icons/react/react-original.svg',
			},
			{
				name: 'Redux',
				iconLink: '/icons/redux/redux-original.svg',
			},
			{
				name: 'ExpressJS',
				iconLink: '/icons/express/express-original.svg',
			},
			{
				name: 'Sequelize',
				iconLink: '/icons/sequelize/sequelize-original.svg',
			},
			{
				name: 'PostgreSQL',
				iconLink: '/icons/postgresql/postgresql-original.svg',
			},
			{
				name: 'Jest',
				iconLink: '/icons/jest/jest-plain.svg',
			},
			{
				name: 'React Testing Library',
				iconLink: '/images/react-testing-library-icon.png',
			},
			{
				name: 'JavaScript',
				iconLink: '/icons/javascript/javascript-original.svg',
			},
			{
				name: 'HTML5',
				iconLink: '/icons/html5/html5-original.svg',
			},
			{
				name: 'CSS3',
				iconLink: '/icons/css3/css3-original.svg',
			},
			{
				name: 'Node.js',
				iconLink: '/icons/nodejs/nodejs-original.svg',
			},
		],
	},
	{
		title: 'Ionic Angular App',
		description:
			'This project uses Ionic and Angular to make a complete cross-platform application that can me run in the browser, and also natively on any iOS and Android mobile device. It also has integrated functionality with the devices storage and camera across the platforms, which is used in the photo gallery tab where one also can take photos.',
		picture: '/images/ionic-application.png',
		links: {
			repo: 'https://github.com/skoms/yoobic-ionic',
			demo: 'https://researchers-refuge.herokuapp.com/',
		},
		technologies: [
			{
				name: 'Angular',
				iconLink: '/icons/angularjs/angularjs-original.svg',
			},
			{
				name: 'Ionic',
				iconLink: '/icons/ionic/ionic-original.svg',
			},
			{
				name: 'TypeScript',
				iconLink: '/icons/typescript/typescript-original.svg',
			},
			{
				name: 'HTML5',
				iconLink: '/icons/html5/html5-original.svg',
			},
			{
				name: 'Sass',
				iconLink: '/icons/sass/sass-original.svg',
			},
		],
	},
	{
		title: 'StencilJS Reusable Component Example',
		description:
			'This app is an example project to host and display one of the Stencil Component I made. StencilJS Components are web components that can be used in any of the major JS frameworks out there and is the future when it comes to reusable and lasting component solutions.',
		picture: '/images/stencil-component.png',
		links: {
			repo: 'https://github.com/skoms/yoobic-stencil',
			demo: 'https://researchers-refuge.herokuapp.com/',
		},
		technologies: [
			{
				name: 'StencilJS',
				iconLink: '/images/stencil-icon.png',
			},
			{
				name: 'TypeScript',
				iconLink: '/icons/typescript/typescript-original.svg',
			},
			{
				name: 'HTML5',
				iconLink: '/icons/html5/html5-original.svg',
			},
			{
				name: 'CSS3',
				iconLink: '/icons/css3/css3-original.svg',
			},
		],
	},
	{
		title: 'WebSockets - Golf Tournament Example',
		description:
			'In this mini-project I utilized SocketIO to connect to a remote server that would ping the application consistently with updates, and then the application will display the new data in real time. Here it is Tournament Data for a Golf Tournament that one can also sort using the table.',
		picture: '/images/golf-tournament.png',
		links: {
			repo: 'https://github.com/skoms/cx-squared-golf',
			demo: 'https://researchers-refuge.herokuapp.com/',
		},
		technologies: [
			{
				name: 'SocketIO',
				iconLink: '/icons/socketio/socketio-original.svg',
			},
			{
				name: 'React',
				iconLink: '/icons/react/react-original.svg',
			},
			{
				name: 'Redux',
				iconLink: '/icons/redux/redux-original.svg',
			},
			{
				name: 'JavaScript',
				iconLink: '/icons/javascript/javascript-original.svg',
			},
			{
				name: 'HTML5',
				iconLink: '/icons/html5/html5-original.svg',
			},
			{
				name: 'CSS3',
				iconLink: '/icons/css3/css3-original.svg',
			},
		],
	},
]
