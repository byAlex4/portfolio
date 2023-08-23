import './Main.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Home from "./Home";
import Portfolio from './Porfolio';
import Soon from "./Proximo";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {
    FaBackward,
    FaForward
} from 'react-icons/fa';

function Navegacion() {
    const [key, setKey] = useState('home');
    return (
        <>
            <div style={{ paddingBottom: "2%" }}>
                <Tabs
                    id="fill-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="myClass"
                    fill
                    style={{ opacity: "0.8" }}
                >
                    <Tab eventKey="perfil" title="SOBRE MI">
                        <Button variant="primaty" className="vertical-line-right" onClick={(k) => setKey("home")}> <FaForward size={"40px"} /> </Button>
                        <Portfolio />
                    </Tab>
                    <Tab eventKey="home" title="INICIO">
                        <Button variant="primaty" className="vertical-line-left" onClick={(k) => setKey("perfil")}> <FaBackward size={"40px"} /> </Button>
                        <Button variant="primaty" className="vertical-line-right" onClick={(k) => setKey("soon")}> <FaForward size={"40px"} /> </Button>
                        <Home />
                    </Tab>
                    <Tab eventKey="soon" title="PROXIMAMENTE">
                        <Button variant="primaty" className="vertical-line-left" onClick={(k) => setKey("home")}> <FaBackward size={"40px"} /> </Button>                        <div className="container px-4 px-lg-5">
                            <Soon/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <footer style={{ bottom: "0", width: "100%"}}>
                <div style={{ backgroundColor: "white", opacity: "0.6", paddingTop:"5%"}}>
                    <div style={{ color: "gray", opacity: "0.6" }}>
                        Hola
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Navegacion;