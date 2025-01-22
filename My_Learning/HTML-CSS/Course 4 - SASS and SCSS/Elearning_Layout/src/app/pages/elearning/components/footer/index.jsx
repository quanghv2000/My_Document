import React from "react";
// import logoCoral from "src/assets/imgs/logo-coral.svg";

export const Footer = () => {
  return (
    <footer className="bd-footer py-4 py-md-5 bg-light">
      <div className="container py-4 py-md-5 px-4 px-md-3">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a
              className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              href="/"
              aria-label="Bootstrap"
            >
              <img
                src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834795/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/logo-coral_b1gqhy.svg"
                alt="logoCoral"
                style={{ width: "160px" }}
                className="mb-2"
              />
            </a>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">
                Designed and built with all the love in the world by the{" "}
                <a href="/docs/5.2/about/team/">Bootstrap team</a> with the help
                of{" "}
                <a href="https://github.com/twbs/bootstrap/graphs/contributors">
                  our contributors
                </a>
                .
              </li>
              <li className="mb-2">
                Code licensed{" "}
                <a
                  href="https://github.com/twbs/bootstrap/blob/main/LICENSE"
                  target="_blank"
                  rel="license noopener noreferrer"
                >
                  MIT
                </a>
                , docs{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="license noopener noreferrer"
                >
                  CC BY 3.0
                </a>
                .
              </li>
              <li className="mb-2">Currently v5.2.1.</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.2/">Docs</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.2/examples/">Examples</a>
              </li>
              <li className="mb-2">
                <a href="https://icons.getbootstrap.com/">Icons</a>
              </li>
              <li className="mb-2">
                <a href="https://themes.getbootstrap.com/">Themes</a>
              </li>
              <li className="mb-2">
                <a href="https://blog.getbootstrap.com/">Blog</a>
              </li>
              <li className="mb-2">
                <a href="https://cottonbureau.com/people/bootstrap">
                  Swag Store
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/docs/5.2/getting-started/">Getting started</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.2/examples/starter-template/">
                  Starter template
                </a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.2/getting-started/webpack/">Webpack</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.2/getting-started/parcel/">Parcel</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.2/getting-started/vite/">Vite</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Projects</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://github.com/twbs/bootstrap">Bootstrap 5</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/twbs/bootstrap/tree/v4-dev">
                  Bootstrap 4
                </a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/twbs/icons">Icons</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/twbs/rfs">RFS</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/twbs/bootstrap-npm-starter">
                  npm starter
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://github.com/twbs/bootstrap/issues">Issues</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/twbs/bootstrap/discussions">
                  Discussions
                </a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/sponsors/twbs">
                  Corporate sponsors
                </a>
              </li>
              <li className="mb-2">
                <a href="https://opencollective.com/bootstrap">
                  Open Collective
                </a>
              </li>
              <li className="mb-2">
                <a href="https://stackoverflow.com/questions/tagged/bootstrap-5">
                  Stack Overflow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
