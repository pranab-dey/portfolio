import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import AboutMeImage from '../../assets/my_photo_.png';

import './about.css';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img
							src={AboutMeImage}
							alt='About'
							className='customImage'></img>
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h6>Experience</h6>
							<small>4+ Years Working</small>
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

						{/* <article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Languages</h5>
							<small>Bangla, English</small>
						</article> */}
					</div>
					<p>
						I am a Software Engineer with a demonstrated history of
						working in the Information & Technology industry. With a
						Bachelor of Science (B.Sc.) focused in Computer science
						and Engineering, I am specialized in JavaScript and have
						professional experience working with NodeJS, React,
						Redux, GraphQL, AWS Services like S3, DynamoDB, Lambda,
						apigateway, CloudFormation.
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
