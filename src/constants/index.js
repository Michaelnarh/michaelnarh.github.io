// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	nupsgknust,
	knust,
	shopify,
	threejs,
	project1,
	project2,
	project3,
	project4,
	project5,
	project6,
	projectAA,
	projectBB,
	projectCC,
	projectDD,
	projectEE,
	projectFF,
	projectGG,
} from "../assets";

// Navbar Links
export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

// Services
const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

// Technologies
const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

// Experiences
const experiences = [
	{
		title: "Software Developer",
		company_name: "UITS, KNUST",
		icon: knust,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Lead Developer",
		company_name: "NUPS-G KNUST",
		icon: nupsgknust,
		iconBg: "#FFF",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

// Testimonials
const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Prof. James Osei Mensah",
		designation: "Senior Lecturer KNUST",
		company: "KOHs Hostels",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Prof. Marian Nkansah",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Emmanuel Agnmortey",
		designation: "CEO",
		company: "Krisposs Ghana",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

// Projects
const projects = [
	{
		name: "KNUST Off-campus Accommodation ",
		description:
			"Access All Recognised Private Hostels & Homestels Access the University's recognised private Hostels and Homestels for easy room booking and get all necessary information concerning them.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
			{
				name: "redux",
				color: "green-text-gradient",
			},
			{
				name: "bootstrap",
				color: "orange-text-gradient",
			},
		],
		image: projectAA,
		source_code_link: "#",
		live_site_link: "https://kosass.knust.edu.gh",
	},
	{
		name: "KNUST Help Desk",
		description:
			"Experience efficient support services at KNUST with our osTicket-powered helpdesk. Submit, track, and resolve requests effortlessly. Whether you're a student or staff, our user-friendly platform ensures prompt assistance. Streamlined communication and issue resolution await you at KNUST's osTicket helpdesk. Get the support you need today",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "osTicket",
				color: "pink-text-gradient",
			},
		],
		image: projectBB,
		source_code_link: "#",
		live_site_link: "https://helpdesk.knust.edu.gh/",
	},
	{
		name: "Krisposs Company Ltd",
		description:
			"A company  curriculum  crafted to encourage learners to engage with the material, participate in group activities, and apply their knowledge in practical scenarios integrated with payment using paystack",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
			{
				name: "mongoDB",
				color: "green-text-gradient",
			},

			{
				name: "nodejs",
				color: "yellow-text-gradient",
			},
		],
		image: projectCC,
		source_code_link: "#",
		live_site_link: "https://krispossghana.com/",
	},
	{
		name: "LeT iT Out",
		description:
			"A Laravel Web Application that  enables NUPS-G KNUST  members to share and express the challenges, concerns and burdens of their hearts. It is our aim that this will be an avenue to seek Godly counsel and comfort in God as we go through the various phases of our lives",
		tags: [
			{
				name: "Laravel",
				color: "blue-text-gradient",
			},
			{
				name: "MySQL",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: projectDD,
		source_code_link: "#",
		live_site_link: "https://help.nupsgknust.org",
	},
	{
		name: "Imprint Generator",
		description:
			"Our Multi-Website Data Extraction AI Web Application is a powerful tool designed to automate and simplify the process of gathering data from multiple websites. Whether you're a researcher, business analyst, or simply someone in need of structured information from various online sources, our application provides an efficient and reliable solution",
		tags: [
			{
				name: "django",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "chaptGPT",
				color: "pink-text-gradient",
			},
		],
		image: projectEE,
		source_code_link: "#",
		live_site_link: "https://$$/",
	},
	{
		name: "Smart Home",
		description:
			"An APP to Transform your home into a futuristic oasis with our Smart Home Control system, built using React Native and Arduino technology. With this innovative solution, you can effortlessly manage and automate all your home appliances from your smartphone. Enjoy the convenience of remotely controlling lights, temperature, security, and more, making your life more comfortable and energy-efficient",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mobx",
				color: "green-text-gradient",
			},
			{
				name: "arduino",
				color: "pink-text-gradient",
			},
			{
				name: "bluetooth",
				color: "orange-text-gradient",
			},
		],
		image: projectFF,
		source_code_link:
			"https://github.com/Technical-Shubham-tech/travel-advisor",
		live_site_link: "https://travel-advisor-reactjs.netlify.app/",
	},
	{
		name: "E-health Care",
		description:
			"Revolutionize your healthcare experience with our E-Healthcare platform, developed using React Native and MongoDB. Access medical services, book appointments, and securely store health records all from your mobile device. Our user-friendly interface ensures convenience, while MongoDB's robust data management ensures data security and accessibility. Experience the future of healthcare, where you're in control of your well-being with just a tap",
		tags: [
			{
				name: "reactNative",
				color: "blue-text-gradient",
			},
			{
				name: "mongoDB",
				color: "green-text-gradient",
			},
			{
				name: "style-component",
				color: "pink-text-gradient",
			},
			{
				name: "mobx",
				color: "yellow-text-gradient",
			},
		],
		image: projectGG,
		source_code_link: "#",
		live_site_link: "#",
	},
];

export { services, technologies, experiences, testimonials, projects };
