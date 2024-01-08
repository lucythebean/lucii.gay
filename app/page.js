import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<span id='header'>You can just go get a website</span>
			</div>
			<Image
				className={styles.image}
				src='/aiOhto.webp'
				priority={true}
				width={196}
				height={214}
				alt='An "abstract" (Poorly drawn) picture of ai ohto wonder egg looking surprised'
			/>
			<div className={styles.description}>
				<span></span>
			</div>
		</main>
	);
}
