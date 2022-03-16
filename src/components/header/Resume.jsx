import React from 'react';
import CV from '../../assets/Pranab_Dey_SDE_II.pdf';

const Resume = () => {
	return (
		<div className='resume'>
			<a href={CV} download className='btn'>
				Download CV
			</a>
			<a href='#contact' className='btn btn-primary'>
				Let's Talk
			</a>
		</div>
	);
};

export default Resume;
