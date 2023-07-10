import Link from 'next/link';
import style from './page.module.css';

export default function Main() {
	return (
		<div className={style.main}>
			<h1>
				WELCOME TO LOCAL [<b>MILFS/DILFS</b>] IN YOUR [<b>HOME ADDRESS</b>]
			</h1>
			<Link href={'https://twitter.com/w1ndylandscape/likes'}>
				<button>
					<b className={style.arrow}>{'> '}</b>PERUSE THE LOCAL [
					<b>USER PREFERENCE</b>]!<b className={style.arrow}>{' <'}</b>
				</button>
			</Link>
			<p>
				local milfs(and/or dilfs) is not responsible, nor will we be held legally
				accountable for: personal injuries, finanical damages and potential loss of
				dignity; as well as any experiences of shame or remorse. by reading up until
				this point, you agree to the local milfs (and/or dilfs) user policy;
				including but not limited to: forfeit of one or more of your kidneys upon
				the event of your death to local milfs (and/or dilfs)™.
			</p>
		</div>
	);
}
