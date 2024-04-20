import { useParams } from "react-router-dom"
import locationsList from '../datas/back-end.json'

function FicheLogement() {
    let { id } = useParams()
    id = id.substring(1)
    const [ location ] = locationsList.filter(function (loc) {
        return loc.id === id;
    });

    return (
        <div>
            <p>{location.title}</p>        
        </div>
    )
}

export default FicheLogement