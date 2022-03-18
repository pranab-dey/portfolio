import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiCustomerServiceLine } from 'react-icons/ri';

import './nav.css';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');

	return (
		<nav>
			<a
				href='#'
				onClick={() => {
					setActiveNav('#');
				}}
				className={activeNav === '#' ? 'active' : ''}>
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
				<BiBook />
			</a>
			<a
				href='#timeline'
				onClick={() => {
					setActiveNav('#timeline');
				}}
				className={activeNav === '#timeline' ? 'active' : ''}>
				<BiMessageSquareDetail />
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
