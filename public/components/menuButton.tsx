'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './components.module.css';

export default function MenuButton({ page, to }) {
	const activePath = usePathname();
	return (
		<Link href={to}>
			<button
				className={style.menuButton}
				style={
					to ==
					activePath.substring(
						0,
						activePath.indexOf('/', 1) != -1
							? activePath.indexOf('/', 1)
							: activePath.length
					)
						? { backgroundColor: 'var(--secondary)', borderColor: 'var(--secondary)' }
						: {}
				}>
				<span id='header'>{page}</span>
			</button>
		</Link>
	);
}
