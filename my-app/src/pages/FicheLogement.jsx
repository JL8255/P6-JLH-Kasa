import { useParams } from "react-router-dom"

const id = useParams

console.log(id)

function FicheLogement(location) {
    return (
        <div>
            <p>{location.title}</p>        
        </div>
    )
}

export default FicheLogement