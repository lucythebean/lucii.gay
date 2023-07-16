import MenuButton from './menuButton';
import style from './components.module.css';

export default function SideBar() {
	return (
		<div className={style.sidebar}>
			<div className={style.menu}>
				<MenuButton
					page='Home'
					to='/'
				/>
				<MenuButton
					page='Search'
					to='/search'
				/>
				<MenuButton
					page='About'
					to='/about'
				/>
			</div>
		</div>
	);
}
