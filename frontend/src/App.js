import './App.css';
import profileImg from './prf_img.jpeg';

function App() {
  return (
    <main className="outer">
      <div className="container">
        <section className="front">
          <div className="content">
            <h1>Digital Resume</h1>

            <img
              src={profileImg}
              alt="Profile"
              className="front-content-profile_img"
            />
            <h2>Full Stack Developer</h2>
            <p>
              Education: <strong>Code Like Pro2</strong>
            </p>
            <p>
              Work: <b>Google</b>
            </p>
            <ul className="front-content-skills">
              <li>React</li>
              <li className="css">Next</li>
              <li className="java">Node</li>
            </ul>
          </div>
        </section>
        <section className="back">
          <div className="content">
            <h1>Contact Me</h1>
            <form className="back-content-form">
              <label for="full-name">Name :</label>
              <input
                id="full-name"
                type="text"
                placeholder="Full Name"
                autocomplete="disabled"
              />
              <label for="email">E-mail :</label>
              <input
                id="email"
                type="text"
                placeholder="Example@mail.com"
                autocomplete="disabled"
              />
              <label for="details">Details :</label>
              <textarea
                id="details"
                placeholder="The message here."
                autocomplete="disabled"
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
