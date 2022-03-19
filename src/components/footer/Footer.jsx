import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

import './footer.css';

const Footer = () => {
	return (
		<footer>
			<blockquote className='footer__logo'>Knowledge is Power</blockquote>

			<ul className='permalinks'>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#skills'>Skills</a>
				</li>
				<li>
					<a href='#timeline'>Timeline</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a
					href='https://www.facebook.com/pranab.dey.77/'
					target='_-blank'
					rel='noreferrer'>
					<FaFacebook />
				</a>
				<a
					href='https://www.instagram.com/_wicked_dey_/'
					target='_-blank'
					rel='noreferrer'>
					<FiInstagram />
				</a>
				<a
					href='https://www.linkedin.com/in/pranab-dey-a55225166/'
					target='_-blank'
					rel='noreferrer'>
					<FiLinkedin />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>
					&copy; Developed & All rights reserved By Pranab Dey
				</small>
			</div>
		</footer>
	);
};

export default Footer;
