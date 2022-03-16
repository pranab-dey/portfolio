import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://www.linkedin.com/in/pranab-dey-a55225166/'>
				<BsLinkedin />
			</a>
			<a href='https://github.com/pranab-dey'>
				<FaGithub />
			</a>
			<a href='https://www.facebook.com/pranab.dey.77/'>
				<BsFacebook />
			</a>
		</div>
	);
};

export default HeaderSocials;
