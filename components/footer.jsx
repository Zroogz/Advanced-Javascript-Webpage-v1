import React from 'react'

const Footer = ({ copyright, socialLinks }) => {
  return (
    <footer className="site-footer">
      <p>{copyright}</p>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.platform} href={link.url} target="_blank" rel="noreferrer">
            {link.platform}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer