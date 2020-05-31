import React from "react"

const Footer = () => (
  <footer className="flex-item">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
