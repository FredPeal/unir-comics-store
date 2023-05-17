import React from "react";
import '../styles/footer.css'
export const Footer = () => {

    return (
        <>
            <footer className="text-center text-lg-start bg-white text-muted">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div>
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </section>
              <section className="">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3 text-secondary"></i>Peal Bookstore
                      </h6>
                      <p>
                      Somos una empresa dedicada a ofrecer soluciones de lectura a nuestros clientes. En nuestro catálogo, contamos con una amplia variedad de libros de distintos géneros y autores, para satisfacer los gustos y preferencias de todos nuestros clientes. <br/>
                      </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        Products
                      </h6>
                      <p>
                        <a href="#!" className="text-reset">Oneshot</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Comics</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Figuras</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">T-Shirt</a>
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
                      <p>
                        <i className="fas fa-envelope me-3 text-secondary"></i>
                        info@example.com
                      </p>
                      <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                      <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center p-4 footer-color">
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="#">Frederick Peñalo</a>
              </div>
            </footer>
        </>
    )
}