import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="section-wrapper g-map z-depth-1">
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8165032159045!2d108.21945831487434!3d16.075009143552798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218309ed9ee23%3A0x20d681c0f8fa5a9c!2zNDEgUXVhbmcgVHJ1bmcsIEjhuqNpIENow6J1IDEsIFEuIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1567496873328!5m2!1svi!2s"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
    <div className="section-wrapper z-depth-1">
      <div className="section-icon col s12 m12 l2">
        <i className="fa fa-paper-plane-o"></i>
      </div>
      <div className="col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s">
        <h2>Contact</h2>
        <div className="contact-form" id="contact">
          <div className="row">
            <form
              role="form"
              id="contactForm"
              data-toggle="validator"
              action="https://formspree.io/levansonqs@gmail.com"
              method="POST"
            >
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              <div className="input-field col s12">
                <label for="name" className="h4">
                  Name *
                </label>
                <input
                  type="text"
                  className="form-control validate"
                  id="name"
                  required
                  data-error="NEW ERROR MESSAGE"
                />
              </div>
              <div className="input-field col s12">
                <label for="email" className="h4">
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control validate"
                  id="email"
                  required
                />
              </div>
              <div className="input-field col s12">
                <label for="message" className="h4 ">
                  Message *
                </label>
                <textarea
                  id="message"
                  className="form-control materialize-textarea validate"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                id="form-submit"
                className="btn btn-success"
              >
                Submit
              </button>
              <div className="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
