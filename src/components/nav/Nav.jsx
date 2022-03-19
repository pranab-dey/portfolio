/* jsx-a11y/anchor-is-valid*/

import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { MdOutlineTimeline } from 'react-icons/md';

import './nav.css';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#home');

	return (
		<nav>
			<a
				href='#home'
				onClick={() => {
					setActiveNav('#home');
				}}
				className={activeNav === '#home' ? 'active' : ''}>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => {
					setActiveNav('#about');
				}}
				className={activeNav === '#about' ? 'active' : ''}>
				<AiOutlineUser />
			</a>
			<a
				href='#skills'
				onClick={() => {
					setActiveNav('#skills');
				}}
				className={activeNav === '#skills' ? 'active' : ''}>
				<GiSkills />
			</a>
			<a
				href='#timeline'
				onClick={() => {
					setActiveNav('#timeline');
				}}
				className={activeNav === '#timeline' ? 'active' : ''}>
				<MdOutlineTimeline />
			</a>
			<a
				href='#contact'
				onClick={() => {
					setActiveNav('#contact');
				}}
				className={activeNav === '#contact' ? 'active' : ''}>
				<RiCustomerServiceLine />
			</a>
		</nav>
	);
};

export default Nav;
