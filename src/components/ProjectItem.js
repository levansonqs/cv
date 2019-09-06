import React, { memo } from "react"
import project from "../images/projects/blog.jpg"

export default memo(function ProjectItem() {
  const [reveal, setReveal] = React.useState(true)
  return (
    <div className="card" style={{ overflow: reveal ? "hidden" : "visible" }}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={project} />
      </div>
      <div className="card-content">
        <span
          className="card-title activator grey-text text-darken-4"
          onClick={() => setReveal(!reveal)}
        >
          My blog<i className="material-icons right">more_vert</i>
        </span>
        <div className="row">
          <div className="col">
            <p>
              If you want a fixed floating action button, you can add multiple
              actions that will appear on hover. Our demo is in the bottom
              righthand corner of the page.
            </p>
          </div>
        </div>
        <div className="row product-row">
          <div className="col s8">
            <div className="chip">Javascript</div>
            <div className="chip">Gatsby</div>
          </div>
          <div className="col s4 right-align">
            <a
              className="btn-floating btn-large waves-effect waves-light red"
              href="https://levansonqs.github.io/experience/"
            >
              <i className="material-icons">link</i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="card-reveal"
        style={{
          display: "block",
          opacity: reveal ? 0 : 1,
          transform: reveal ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <span
          className="card-title grey-text text-darken-4"
          onClick={() => setReveal(!reveal)}
        >
          <i className="material-icons right">close</i>Card Title
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  )
})
