import { useParams } from "react-router-dom"
import locationsList from '../datas/back-end.json'
import styles from '../style/FicheLogement.module.scss'
import Tag from "../components/Tag"
import Notation from "../components/Notation"

function FicheLogement() {

    let { id } = useParams()
    id = id.substring(1)

    const [ location ] = locationsList.filter(function (loc) {
        return loc.id === id;
    });

    const whereSpace = location.host.name.search(" ")
    const prenom = location.host.name.substring(0,whereSpace)
    const nom = location.host.name.substring(whereSpace)

    const tags = location.tags

    if (location == undefined) {document.location.replace('/Error_id_not_found!')
    } else {
    return (
        <div>
            <img className={styles.img} src={location.cover} alt="photo de la location"/>
            
            <div className={styles.capsuleTitre}>
                <div className={styles.contentTitle}>
                    <h2 className={styles.title}>{location.title}</h2>
                    <p className={styles.location}>{location.location}</p>
                </div>
                <div className={styles.contentHost}>
                    <div className={styles.contentNom}>
                        <h3>{prenom}</h3>
                        <h3>{nom}</h3>
                    </div>
                    <img src={location.host.picture} alt="avatar du propriétaire"/>
                </div> 
            </div>

            <div className={styles.capsuleTag}>
                <div className={styles.tag}>
                    {tags.map((tag, index) => <Tag key={index} tag={tag}/>)}
                </div>
                <div>
                    <Notation rat={location.rating}/>
                </div>
            </div>
        </div>
    )}
}

export default FicheLogement