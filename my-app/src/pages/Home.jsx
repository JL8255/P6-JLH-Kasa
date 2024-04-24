import BannerPicture from "../components/BannerPicture"
import Slideshow from "../components/Slideshow"
import IMG2 from '../assets/paysage_bord_de_mer.jpg';


function Home() {
    return (
    <div>
        <BannerPicture img={IMG2} opacity={0.45}/>
        <Slideshow />
    </div>
    )
}

export default Home