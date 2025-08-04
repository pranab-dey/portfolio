import React from 'react';
import Resume from './Resume';
import HeaderSocials from './HeaderSocials';
import MyImage from '../../assets/my_photo.gif';
import LazyLoad from 'react-lazyload';
import './header.css';

const Header = () => {
	return (
		<header id='intro'>
			<div className='container header__container'>
				<div style={{ paddingLeft: '40px' }}>
					<h3>Hello there, I am</h3>
					<h1>Pranab Dey</h1>
					<h6 className='text-light'>Senior Software Engineer</h6>

					<Resume />
				</div>

				<HeaderSocials />

				<div className='my__photo'>
					<LazyLoad
						height={'100%'}
						once={true}
						style={{
							display: 'block',
						}}>
						<img
							src={MyImage}
							alt='my_photo'
							style={{ mixBlendMode: 'screen' }}
						/>
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
