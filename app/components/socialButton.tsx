'use client';
import Link from 'next/link';
import style from './components.module.css';
import Image from 'next/image';

export default function socialButton({ to }) {
	const sites = {
		twitter: 'https://twitter.com/lucyindenial',
		discord: 'lucyindenial',
		github: 'https://github.com/lucythebean',
		
	};
	return (
		<Link href={sites[to]}>
			<span></span>
		</Link>
	);
}
