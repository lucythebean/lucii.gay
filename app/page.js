import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Lucy's internet den :3</h1>
      </div>
      <div className={styles.description}>
        <Image
          src="/yupeeee.png"
          width={300}
          height={462}
          alt="A crudely drawn cat raising one eyebrow at viewer with a trans flag in the background"
        />
        <p>
          A whole big chunk of text, a funky one if you will, lorem ipsum verde,
          a duck walked up to a lemonade stand and she said to the man, running
          the stand, hey! bababa, got any grapes? the man said no, we just sell
          lemonade, if you want grapes theres load at the store. the duck said
          idk i forgor and he waddled away wadddle waddle lorem ipsum verde
          avada kadavera ecetera overwatch winton bingled (:3) gayge testing 2
          testing 3 testing 1(prequel) now i add more text to it because i need
          to test however down it goes and if its going to scale well with more
          word pog
        </p>
      </div>
      <div className={styles.grid}>
        <div>
          <Link href="/search">
            <h2>Search</h2>
            <p>Parse yourself some Genshin api (Work in progress lol)</p>
          </Link>
        </div>
        <div>
          <h2>More testing</h2>
          <p> ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
        </div>
        <div>
          <h2>Header 3 test</h2>
          <p>Span test (lie)</p>
        </div>
      </div>
    </main>
  );
}
