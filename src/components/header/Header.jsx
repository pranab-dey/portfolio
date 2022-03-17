import React from 'react';
import Resume from './Resume';
import HeaderSocials from './HeaderSocials';
import MyImage from '../../assets/my_photo.png';
import './header.css';

const imageSize = { width: '100%', height: '100%' };

const Header = () => {
	return (
		<header id='#'>
			<div className='container header__container'>
				<h5>Hello there, I am</h5>
				<h1>Pranab Dey</h1>
				<h5 className='text-light'>Software Development Engineer</h5>

				<Resume />
				<HeaderSocials />

				<div className='my__photo'>
					<img src={MyImage} alt='my_photo' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll to Bottom
				</a>
			</div>
		</header>
	);
};

export default Header;
