import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import './contact.css';

const Contact = () => {
	return (
		<section id='contact'>
			<h5 className='customH5'>Get In Touch</h5>
			<h2 className='customH2'>Contact Me</h2>

			<div className='container container__contact'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineMail className='icon' />
						<h4>Email</h4>
						<h5>pranab.strings07@gmail.com</h5>
						<a
							href='mailto:pranab.strings07@gmail.com'
							target='_blank'
							rel='noreferrer'>
							Send a mail
						</a>
					</article>

					<article className='contact__option'>
						<RiMessengerLine className='icon' />
						<h4>Messenger</h4>
						<h5>pranab.dey.77</h5>
						<a
							href='https://m.me//pranab.dey.77'
							target='_blank'
							rel='noreferrer'>
							knock me in Facebook
						</a>
					</article>

					<article className='contact__option'>
						<BsWhatsapp className='icon' />
						<h4>Whatsapp</h4>
						<h5>+8801673764471</h5>
						<a
							href='https://api.whatsapp.com/send?phone=+8801673764471'
							target='_blank'
							rel='noreferrer'>
							Send a message
						</a>
					</article>
				</div>

				{/* <form action=''>
					<input
						type='text'
						name='name'
						placeholder='Full Name'
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						required
					/>
					<textarea
						type='text'
						name='message'
						placeholder='Your Message...'
						rows='7'
						required
					/>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form> */}
			</div>
		</section>
	);
};

export default Contact;
