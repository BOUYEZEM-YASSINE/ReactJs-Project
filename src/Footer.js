function Footer(){
    return(
        <footer className="page-footer bg-dark">
            <div className="BG">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-sm-12 text-center">
                            <p>Follow US:</p>
                            <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f text-white mr-4"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram text-white mr-4"></i></a>
                            <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter text-white"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-sm-left mt-5">
                <div className="row">
                    <div className="col-sm-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold COT">the providers</h6>
                        <hr className="bg-success"/>
                        <p className="mt-2 text-white">Lorem ipsum dolor sit amet consectetur adisunt doloremque voluptatum nihil minima molestiae rem! Maxime neque nisi, omnis repellendus blanditiis ratione modi eius expedita sequi facilis!</p>
                    </div>
                    <div className="col-sm-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold COT">Technologies</h6>
                        <hr className="bg-success"/>
                        <ul className="list-unstyled">
                            <li className="my-2"><a className="text-white" href="#">HTML</a></li>
                            <li className="my-2"><a className="text-white" href="#">CSS</a></li>
                            <li className="my-2"><a className="text-white" href="#">BOOTSTRAP</a></li>
                            <li className="my-2"><a className="text-white" href="#">REACT JS</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold COT">Contact</h6>
                        <hr className="bg-success"/>
                        <ul className="list-unstyled">
                            <li className="my-2 text-white"><i class="fas fa-envelope mr-3"></i> myrecipe2021@gmail.com</li>
                            <li className="my-2 text-white"><i class="fas fa-phone mr-3"></i> 0680806060</li>
                            <li className="my-2 text-white"><i class="fas fa-map-marker-alt mr-3"></i> Residance Assalam N:15 Rabat</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center text-white py-3">
                <p>
                    &copy;Copyright
                    <a className="text-success" href="#">myrecipe.com</a>
                    <p>Designed by: Mohamed Bouabdelaoui & Yassine Bouyezem</p>
                </p>
            </div>
        </footer>
    );
}
export default Footer;