import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<h3>Lucy's internet den :3</h3>
			</div>
			<Image
				className={styles.image}
				src='/yupeeee.png'
				width={300}
				height={462}
				alt='A crudely drawn cat raising one eyebrow at viewer with a trans flag in the background'
			/>
			<Image
				src='/aiShookCUBED.png'
				width={276}
				height={276}
				alt='An abstract (Poorly drawn) picture of ai ohto wonder egg looking surprised'
			/>
			<div className={styles.description}>
				<p>
					A whole big chunk of text, a funky one if you will, lorem ipsum verde, a
					duck walked up to a lemonade stand and she said to the man, running the
					stand, hey! bababa, got any grapes? the man said no, we just sell lemonade,
					if you want grapes theres load at the store. the duck said idk i forgor and
					he waddled away wadddle waddle lorem ipsum verde avada kadavera ecetera
					overwatch winton bingled (:3) gayge testing 2 testing 3 testing 1(prequel)
					now i add more text to it because i need to test however down it goes and
					if its going to scale well with more word pog
				</p>
			</div>
		</main>
	);
}
