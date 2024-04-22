import styles from '../style/ThemeAP.module.scss';
import themeList from '../datas/APropos.json'
import Collapse from './Collapse';

function Theme() {
	return (
		<div className={styles.contentTheme}>
            {themeList.map((theme) => (
                <div className={styles.contentCollapse} key={theme.id}>
                    <Collapse name={theme.theme} content={theme.contenu} />
                </div>
            ))}
		</div>
	)
}

export default Theme