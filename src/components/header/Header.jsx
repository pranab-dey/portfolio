import React from 'react';
import Resume from './Resume';
import HeaderSocials from './HeaderSocials';
import MyImage from '../../assets/my_photo.png';
import LazyLoad from 'react-lazyload';
import './header.css';

const Header = () => {
	return (
		<header id='intro'>
			<div className='container header__container'>
				<div style={{ paddingLeft: '40px' }}>
					<h5 className='customH5Title'>Hello there, I am</h5>
					<h1 className='customH1'>Pranab Dey</h1>
					<h5 className='text-light subtitle'>
						Software Development Engineer
					</h5>

					<Resume />
				</div>

				<HeaderSocials />

				<div className='my__photo'>
					<LazyLoad height={'100%'} once={true}>
						<img src={MyImage} alt='my_photo' />
					</LazyLoad>
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll to Bottom
				</a>
			</div>
		</header>
	);
};

export default Header;
