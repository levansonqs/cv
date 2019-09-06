import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteWorkQuery {
      site {
        siteMetadata {
          work {
            position
            time
            description
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="section-wrapper z-depth-1">
        <div className="section-icon col s12 m12 l2">
          <i className="fa fa-suitcase"></i>
        </div>
        <div
          className="custom-content col s12 m12 l10 wow fadeIn a1"
          data-wow-delay="0.1s"
        >
          <h2>Work Experience</h2>
          {data.site.siteMetadata.work.map((work, index) => (
            <div
              className="custom-content-wrapper wow fadeIn a2"
              data-wow-delay="0.2s"
              key={index}
            >
              <h3>{work.position}</h3>
              <span>{work.time} </span>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-wrapper z-depth-1">
        <div className="section-icon col s12 m12 l2">
          <i className="fa fa-graduation-cap"></i>
        </div>
        <div
          className="custom-content col s12 m12 l10 wow fadeIn a1"
          data-wow-delay="0.1s"
        >
          <h2>Education </h2>

          <div
            className="custom-content-wrapper wow fadeIn a2"
            data-wow-delay="0.2s"
          >
            <h3>
              SoftWare Engineer <span>@DaNang Technology of University</span>
            </h3>
            <span>SEP 2009 - MAY 2015 </span>
            <p>Learn SoftWare in DaNang Technology of University.</p>
          </div>
        </div>
      </div>
      <div className="section-wrapper z-depth-1">
        <div className="section-icon col s12 m12 l2">
          <i className="fa fa-plane"></i>
        </div>
        <div
          className="interests col s12 m12 l10 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <h2>Interestes </h2>
          <ul>
            <li>
              <i
                className="fa fa-camera-retro tooltipped"
                data-position="top"
                data-delay="50"
                data-tooltip="Photography"
              ></i>
            </li>
            <li>
              <i
                className="fa fa-glass tooltipped"
                data-position="top"
                data-delay="50"
                data-tooltip="Drinking"
              ></i>
            </li>
            <li>
              <i
                className="fa fa-headphones tooltipped"
                data-position="top"
                data-delay="50"
                data-tooltip="Music"
              ></i>
            </li>
            <li>
              <i
                className="fa fa-comments tooltipped"
                data-position="top"
                data-delay="50"
                data-tooltip="Chatting"
              ></i>
            </li>
            <li>
              <i
                className="fa fa-coffee tooltipped"
                data-position="top"
                data-delay="50"
                data-tooltip="Coffee"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
