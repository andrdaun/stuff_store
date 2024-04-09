import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';

import logo from '../../images/logo.svg';

const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={logo} alt='Stuff' />
				</Link>
			</div>
			<div className={styles.rights}>
				Developed by{' '}
				<a href='https://github.com/andrdaun' target='_blank' rel='noreferrer'>
					andrdaun
				</a>
			</div>
		</section>
	);
};

export default Footer;
