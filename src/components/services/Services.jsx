import React from 'react';
import { ReactComponent as WorkIcon } from '../../assets/work.svg';
import { ReactComponent as SchoolIcon } from '../../assets/school.svg';
import timelineElements from './timeLineElements';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { RiCheckboxFill } from 'react-icons/ri';

import './services.css';

const Services = () => {
	let workIconStyles = { background: '#06D6A0' };
	let schoolIconStyles = { background: '#f9c74f' };
	return (
		<section id='timeline'>
			<h5>What I've Done so far</h5>
			<h2>My Timeline</h2>
			<div>
				<VerticalTimeline
					lineColor={'red'}
					className='VerticalTimelineCUSTOM'>
					{timelineElements.map((element) => {
						let isWorkIcon = element.icon === 'work';
						let showButton =
							element.buttonText !== undefined &&
							element.buttonText !== null &&
							element.buttonText !== '';

						return (
							<VerticalTimelineElement
								key={element.key}
								date={element.date}
								dateClassName={'date'}
								iconStyle={
									isWorkIcon
										? workIconStyles
										: schoolIconStyles
								}
								icon={
									isWorkIcon ? <WorkIcon /> : <SchoolIcon />
								}
								// style={{
								// 	background: 'green',
								// }}

								contentStyle={{
									border: '1px solid rgba(77, 181, 255, 0.4)',
									borderRadius: '10px',
									background: 'rgb(9, 21, 31)',
								}}
								contentArrowStyle={{}}
								textClassName={'textColor'}>
								<h3 className='vertical-timeline-element-title'>
									{element.title}
								</h3>
								<h4 style={{ color: 'grey' }}>
									@ {element.institute}
								</h4>
								<small className='vertical-timeline-element-subtitle text-light'>
									{element.location}
								</small>

								<ul className='service__list'>
									{element.description.map((description) => (
										<li>
											<div>
												<RiCheckboxFill className='service__list-icon' />
											</div>
											<div>
												<p id='description'>
													{description}
												</p>
											</div>
										</li>
									))}
								</ul>

								{showButton && (
									<a
										className={`button ${
											isWorkIcon
												? 'workButton'
												: 'schoolButton'
										}`}
										href={element.link}
										target='__blank'>
										{element.buttonText}
									</a>
								)}
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</div>
		</section>
	);
};

export default Services;
