import { useParams } from "react-router-dom"


function FicheLogement(location) {
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            <p>{location.title}</p>        
        </div>
    )
}

export default FicheLogement