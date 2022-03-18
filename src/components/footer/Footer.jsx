import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

import './footer.css';

const Footer = () => {
	return (
		<footer>
			<a>
				<blockquote className='footer__logo'>
					Knowledge is Power
				</blockquote>
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
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
					target='_-blank'>
					<FaFacebook />
				</a>
				<a
					href='https://www.instagram.com/_wicked_dey_/'
					target='_-blank'>
					<FiInstagram />
				</a>
				<a
					href='https://www.linkedin.com/in/pranab-dey-a55225166/'
					target='_-blank'>
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
