import React from 'react';
import ReactGA from 'react-ga';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Services from './components/services/Services';

ReactGA.initialize('UA-224033822-1');
ReactGA.pageview(window.location.pathname);

const App = () => {
	return (
		<div>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Services />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
