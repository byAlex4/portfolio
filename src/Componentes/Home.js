import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
window.addEventListener('scroll', Inicio);

function Inicio() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i< reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
    return (
        <>
            <div className="text-center">
                <Image src='https://i.postimg.cc/NGn4NbkH/logo.png' style={{ width: "40%", paddingTop:"5%", paddingBottom:"10%"}} />
                <div className="contenido reveal">
                    <h1>Mi Portfolio</h1>
                    
                    <p>Alejandro es muy perfeccionista, se le conoce por ser observador,
                        ve detalles que los demás no, Además de ver problemas también encuentra buenas soluciones
                        para todo tipo de problemas. Tiene ideas bastante ocurrentes que van más allá de una persona normal,
                        es alguien arriesgado, siempre prueba cosas nuevas, no le gusta la rutina y seguir modas, el crea su propio estilo. </p>


                    <div className="container-fluid bg-3 text-center">
                        <h3>Esto es algo de mis trabajos</h3>
                        <div className="row">
                            <div className="col-sm-4">
                                <Link className='text-link' to="https://atravesdetusojos.000webhostapp.com/">
                                    <Image src="https://i.postimg.cc/VLLZS3x7/imagen.png" alt="Image" height={"150px"} />
                                    <p>Atraves de tus Ojos</p>
                                </Link>
                            </div>
                            <div className="col-sm-4">
                                <Link className='text-link' to="https://atravesdetusojos.000webhostapp.com/">
                                    <Image src="https://i.postimg.cc/NFN2FNVn/clevercel.jpg" alt="Image" height={"150px"} />
                                    <p>Clevercel</p>
                                </Link>
                            </div>
                            <div className="col-sm-4">
                                <Link className='text-link' to="https://atravesdetusojos.000webhostapp.com/">
                                    <Image src="https://i.postimg.cc/FFGLTRRx/sundevil.jpg" alt="Image" height={"150px"} />
                                    <p>Diablos del Sol Store</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    Proximanente...
                    <div className="container-fluid bg-3 text-center">
                        <div className="row">
                            <div className="col-sm-4">
                                <Link className='text-link' to="#">
                                    <Image src="https://placehold.it/150x80?text=IMAGE" alt="Image" height={"150px"} />
                                    <p>Next</p>
                                </Link>
                            </div>
                            <div className="col-sm-4">
                                <Link className='text-link' to="#">
                                    <Image src="https://placehold.it/150x80?text=IMAGE" alt="Image" height={"150px"} />
                                    <p>Next</p>
                                </Link>
                            </div>
                            <div className="col-sm-4">
                                <Link className='text-link' to="#">
                                    <Image src="https://placehold.it/150x80?text=IMAGE" alt="Image" height={"150px"} />
                                    <p>Next</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <figure>
                <blockquote className="blockquote">
                    "Si se puede <strong>IMAGINAR</strong> se puede programar"
                </blockquote>
                <figcaption className="blockquote-footer">
                    Algun programador <cite title="Source Title">del mundo</cite>
                </figcaption>
            </figure>
        </>
    );
}
export default Inicio;