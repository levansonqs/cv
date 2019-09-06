/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import logo from "../images/logo.jpg"

import "materialize-css/bin/materialize.css"
import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import "../../assets/css/demo.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          role
          description
          skill {
            name
            point
          }
        }
      }
    }
  `)
  const [mobile, setMobile] = React.useState(true)

  function openMenu() {
    setMobile(!mobile)
  }
  return (
    <div className="container">
      <div className="row">
        <aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
          <div className="row">
            <div className="heading">
              <div className="feature-img">
                <Link to="/">
                  <img src={logo} className="responsive-img" alt="" />
                </Link>
              </div>
              <div className=" nav-icon">
                <nav>
                  <div className="nav-wrapper">
                    <ul
                      id="nav-mobile"
                      className="side-nav"
                      style={{ left: mobile ? "-300px" : 0 }}
                    >
                      <li>
                        <Link to="/">Resume</Link>
                      </li>
                      <li>
                        <Link to="/project">Projects</Link>
                      </li>
                      <li>
                        <a href="https://levansonqs.github.io/experience/">
                          Blog
                        </a>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                    <a
                      href="#"
                      onClick={openMenu}
                      data-activates="nav-mobile"
                      className="button-collapse  "
                    >
                      <i className="large material-icons">menu</i>
                    </a>
                  </div>
                </nav>
              </div>
              <div
                className="title col s12 m12 l9 right  wow fadeIn animated"
                data-wow-delay="0.1s"
              >
                <h2>{data.site.siteMetadata.title}</h2>
                <span>{data.site.siteMetadata.role}</span>
              </div>
            </div>
            <div className="col l12 m12 s12 sort-info sidebar-item">
              <div className="row">
                <div className="col m12 s12 l3 icon">
                  <i className="fa fa-user"></i>
                </div>
                <div
                  className="col m12 s12 l9 info wow fadeIn a1 animated"
                  data-wow-delay="0.1s"
                >
                  <div className="section-item-details">
                    <ul className="summary">
                      <li> 4+ years experienced in software development.</li>
                      <li> 3+ years experienced with PHP Laravel MVC</li>
                      <li>
                        2+ years experienced with React Native and ReactJS,
                        NodeJS
                      </li>
                      <li>
                        Excellent communication, positive attitude, teamwork.
                      </li>
                      <li>Training and help members develop in career path.</li>
                      <li> Interested in R&D for new technologies.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12  mobile sidebar-item">
              <div className="row">
                <div className="col m12 s12 l3 icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div
                  className="col m12 s12 l9 info wow fadeIn a2 animated"
                  data-wow-delay="0.2s"
                >
                  <div className="section-item-details">
                    <div className="personal">
                      <h4>
                        <a href="tel:+84349566781">(+84)-3495-66781</a>
                      </h4>
                      <span>mobile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12  email sidebar-item ">
              <div className="row">
                <div className="col m12 s12 l3 icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div
                  className="col m12 s12 l9 info wow fadeIn a3 animated"
                  data-wow-delay="0.3s"
                >
                  <div className="section-item-details">
                    <div className="personal">
                      <h4>
                        <a href="mailto:levansonqs@gmail.com">
                          levansonqs@gmail.com
                        </a>
                      </h4>
                      <span>personal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12  address sidebar-item ">
              <div className="row">
                <div className="col l3 m12  s12 icon">
                  <i className="fa fa-home"></i>
                </div>
                <div
                  className="col m12 s12 l9 info wow fadeIn a4 animated"
                  data-wow-delay="0.4s"
                >
                  <div className="section-item-details">
                    <div className="address-details">
                      <h4>
                        39-41 Quang Trung street<span>(4nd floor)</span>
                        <br />
                        Hai Chau, Da Nang.
                        <br />
                        <span>550000</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12  skills sidebar-item">
              <div className="row">
                <div className="col m12 l3 s12 icon">
                  <i className="fa fa-calendar-o"></i>
                </div>
                <div
                  className="col m12 l9 s12 skill-line a5 wow fadeIn animated"
                  data-wow-delay="0.5s"
                >
                  <h3>Professional Skills </h3>
                  {data.site.siteMetadata.skill.map((skill, index) => (
                    <React.Fragment key={index}>
                      <span>{skill.name}</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{ width: `${skill.point}%` }}
                        >
                          <i className="fa fa-circle"></i>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section className="col s12 m12 l8 section">
          <div className="row">
            {children}
            <div
              className="section-wrapper z-depth-1 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="col s12 m12 l10 website right">
                <div className="row">
                  <div className="col s12 m12 l6">
                    <span>
                      <Link to="/">levanson</Link>
                    </span>
                  </div>
                  <div className="col col s12 m12 l6">
                    <span>
                      <a href="https://levansonqs.github.io/experience/">
                        Blog
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
