import styles from '../style/ThemeAP.module.scss';
import themeList from '../datas/APropos.json'
import Vector from '../assets/Vector.svg';

function Theme() {
	return (
		<div className={styles.contentTheme}>
            {themeList.map((theme) => (
                <a className={styles.Theme} key={theme.id}>
                    <p>{theme.theme}</p>
                    <img src={Vector} alt="développer" />
                </a>
            ))}
		</div>
	)
}

export default Theme