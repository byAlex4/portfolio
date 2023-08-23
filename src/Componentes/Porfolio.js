import Image from 'react-bootstrap/Image';
import {
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaLinkedin,
    FaMailBulk,
} from 'react-icons/fa';
function Portfolio() {
    return (
        <>
            <div className="text-center" style={{paddingBottom:"5%", paddingTop:"5%", position:"relative"}}>
                <h3 className="margin">¿Quien soy?</h3>
                <h3>Yo soy Alejandro..</h3>
                <Image src='https://i.postimg.cc/rp3mgSyR/foto.jpg' roundedCircle alt='Fotografia' />
            </div>
            <div className='contenido reveal' style={{paddingTop:"7%", paddingBottom:"7%"}}>
                <div className="container-fluid bg-2 text-center">
                    <h3 className="margin">¿Que soy?</h3>
                    <p>Diseñador...</p>
                    <p>Alejandro es muy perfeccionista, se le conoce por ser observador, ve detalles que los demás no, Además de ver problemas también encuentra buenas soluciones <br />
                        para todo tipo de problemas. Tiene ideas bastante ocurrentes que van más allá de una persona normal, es alguien arriesgado, siempre prueba cosas nuevas, <br />
                        no le gusta la rutina y seguir modas, el crea su propio estilo. </p>
                </div>

                <div className="container-fluid text-center">
                    <h3 className="margin">¿Como contactarme?</h3>
                    <br></br><br></br>
                    <div className="row">
                        <div className="col">
                            <a className="btn btn-outline-light btn-social mx-1" href="#!">
                                <FaFacebook size={"40px"} />
                                <p>Facebook</p></a>
                        </div>
                        <div className="col">
                            <a className="btn btn-outline-light btn-social mx-1" href="#!">
                                <FaTwitter size={"40px"} />
                                <p>Twitter</p>
                            </a>
                        </div>
                        <div className="col">
                            <a className="btn btn-outline-light btn-social mx-1" href="#!">
                                <FaWhatsapp size={"40px"} />
                                <p>WhatsApp</p>
                            </a>
                        </div>
                        <div className="col">
                            <a className="btn btn-outline-light btn-social mx-1" href="#!">
                                <FaLinkedin size={"40px"} />
                                <p>Linkedin</p>
                            </a>
                        </div>
                        <div className="col">
                            <a className="btn btn-outline-light btn-social mx-1" href="#!">
                                <FaMailBulk size={"40px"} />
                                <p>E-Mail</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Portfolio;