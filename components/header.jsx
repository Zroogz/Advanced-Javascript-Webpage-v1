import React from 'react'

const Header = (props) => {
  const displayName = props.name
  const displayTagline = props.tagline

  return (
    <header className="site-header">
      <div className="header-brand">
        <h1>{displayName}</h1>
        <p className="tagline">{displayTagline}</p>
      </div>
      {props.children}
    </header>
  )
}

export default Header