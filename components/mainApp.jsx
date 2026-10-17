import React from 'react';
import Header from './header.jsx';
import Nav from './nav.jsx';
import Footer from './footer.jsx';

function App() {
  const personalInfo = {
    name: "Zach Ruegsegger",
    tagline: "Freelance Web Developer",
    bio: "Hello! I am making this website for Advanced Javascript Class at the FVTC. This website uses React and JSX to create a simple personal webpage. I am learning how to use React components, props, and state to build dynamic user interfaces.",
    copyright: `© ${new Date().getFullYear()} Zach Ruegsegger. All rights reserved.`
  };

  const hobbies = [
    { id: 1, name: "Playing Pinball" },
    { id: 2, name: "Sketching Art" },
    { id: 3, name: "Learning Electronics" },
    { id: 4, name: "Video Gaming" }
  ];

  const socials = [
    { platform: "GitHub", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "Twitter", url: "#" }
  ];

  return (
    <div className="app-container">
      {/* Passing data as props and Nav as a child element */}
      <Header name={personalInfo.name} tagline={personalInfo.tagline}>
        <Nav />
      </Header>

      <main className="main-content">
        <section className="bio-section">
          <h2>About Me</h2>
          <p>{personalInfo.bio}</p>
        </section>

        <section className="favorites-section">
          <h2>My Favorite Hobbies</h2>
          <ul className="personal-favorites">
            {hobbies.map((hobby) => (
              <li key={hobby.id}>{hobby.name}</li>
            ))}
          </ul>
        </section>
      </main>

      <Footer copyright={personalInfo.copyright} socialLinks={socials} />
    </div>
  );
}

export default App;