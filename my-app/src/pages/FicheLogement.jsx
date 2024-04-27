import { useParams } from "react-router-dom"
import locationsList from '../datas/back-end.json'
import styles from '../style/FicheLogement.module.scss'
import Tag from "../components/Tag"
import Notation from "../components/Notation"
import Collapse from "../components/Collapse"
import Carrousel from "../components/Carrousel"

function FicheLogement() {

    let { id } = useParams()
    const [ loc ] = locationsList.filter(function (loc) {
        return loc.id === id;
    });

    if (loc == undefined) {document.location.replace('/Error_id_not_found!')
    } else {

    const whereSpace = loc.host.name.search(" ")
    const prenom = loc.host.name.substring(0,whereSpace)
    const nom = loc.host.name.substring(whereSpace)

    const tags = loc.tags

    return (
        <div>
            <Carrousel pictures={loc.pictures}/>
            
            <div className={styles.capsuleTitre}>
                <div className={styles.contentTitle}>
                    <h2 className={styles.title}>{loc.title}</h2>
                    <p className={styles.location}>{loc.location}</p>
                    <div className={styles.capsuleTag}>
                        <div className={styles.tag}>
                            {tags.map((tag, index) => <Tag key={index} tag={tag}/>)}
                        </div>
                    </div>
                </div>
                <div className={styles.contentHost}>
                    <div className={styles.contentAvatar}>
                        <div className={styles.contentNom}>
                            <h3>{prenom}</h3>
                            <h3>{nom}</h3>
                        </div>
                        <img src={loc.host.picture} alt="avatar du propriétaire"/>
                    </div>
                    <div className={styles.contentNotation}>
                        <Notation rat={loc.rating}/>
                    </div>
                </div> 
            </div>

            <div className={styles.contentCol}>
                <div className={styles.collapse}>
                    <Collapse name="Description" content={[loc.description]}/>
                </div>
                <div className={styles.collapse}>
                    <Collapse name="Equipement" content={loc.equipments}/>
                </div>
            </div>
        </div>
    )}
}

export default FicheLogement