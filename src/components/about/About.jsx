import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import './about.css';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				{/* <div className='about__me'>
					<div className='about__me-image'>
						<LazyLoad height={'100%'} once={true}>
							<img
								src={AboutMeImage}
								alt='About'
								className='customImage'
							/>
						</LazyLoad>
					</div>
				</div> */}
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h6>Experience</h6>
							<small>6+ Years Working</small>
						</article>
						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h6>Education</h6>
							<small>B.Sc. in CSE</small>
						</article>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h6>Projects</h6>
							<small>20+ Completed</small>
						</article>
					</div>
					<p>
						Senior Full Stack Software Engineer with 6+ years of
						experience in building scalable, cloud-native
						applications using React, NodeJS, NestJS, AWS and
						serverless technologies. Proven success in delivering
						high-performance APIs, modern frontend architectures,
						and cost-efficient event driven systems in agile teams.
					</p>

					{/* <a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a> */}
				</div>
			</div>
		</section>
	);
};

export default About;
