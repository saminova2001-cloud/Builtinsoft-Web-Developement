import React from "react";
import "./Netflix.css";
function ProjectNetflix(){
  return;
    <>
<div className="main">
    <nav>
      <img src="Assets/images/logo.svg" alt="" />
      <div className="sign-in">
        <button>Sign In</button>
      </div>
    </nav>
    <div className="box">
      <div className="hero">
        <h1>
          {" "}
          Unlimited movies,TV
          <br />
          shows, and more
        </h1>
        <p>Starts at Rs 250. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div>
          <input type="text" placeholder="Email address" />
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  </div>
  <div className="curve-section"></div>
  
  <div className="container">
    <div className="section-title">Trending Now</div>
    <div className="slider">
      <div className="card">
        <img src=".//Assets/images/1.webp" alt="image 1" />
        <div className="number">1</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/2.webp" alt="image 2" />
        <div className="number">2</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/3.webp" alt="image 3" />
        <div className="number">3</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/4.webp" alt="image 4" />
        <div className="number">4</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/5.webp" alt="image 5" />
        <div className="number">5</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/6.webp" alt="image 6" />
        <div className="number">6</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/7.webp" alt="image 7" />
        <div className="number">7</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/8.webp" alt="image 8" />
        <div className="number">8</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/9.webp" alt="image 9" />
        <div className="number">9</div>
      </div>
      <div className="card">
        <img src=".//Assets/images/10.webp" alt="image 10" />
        <div className="number">10</div>
      </div>
    </div>
  </div>
  <div className="container2">
    <div className="section-title">More Reasons to Join</div>
    <div className="section">
      <div className="card2">
        <h3>Enjoy on your TV</h3>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
        <img
          className="smallimg"
          src=".//Assets/images/small1.png"
          alt="small1"
          height="75px"
          width="75px"
        />
      </div>
      <div className="card2">
        <h3>Download your shows to watch offline</h3>
        <p>Save your favorites easily and always have something to watch.</p>
        <img
          className="smallimg"
          src=".//Assets/images/small2.png"
          alt="small2"
          height="75px"
          width="75px"
        />
      </div>
      <div className="card2">
        <h3>Watch everywhere</h3>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
        <img
          className="smallimg"
          src=".//Assets/images/small3.png"
          alt="small3"
          height="75px"
          width="75px"
        />
      </div>
      <div className="card2">
        <h3>Create profiles for kids</h3>
        <p>
          Send kids on adventures with their favorite characters in a space made
          just for them — free with your membership.
        </p>
        <img className="smallimg" src=".//Assets/images/small4.png" alt="small4" style={{ height: "75px", width: "75px" }} />
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="container3">
      <div className="section-title">Frequently Asked Questions</div>
      <div className="container-text">
        <div className="questionbox">
          <span className="faq">
            <p>What is Netflix?</p>
            <img
              src=".//Assets/images/plus.png"
              alt="plus"
              height="35px"
              width="35px"
            />
          </span>
        </div>
        <div className="questionbox">
          <span className="faq">
            <p>How much does Netflix cost?</p>
            <img
              src=".//Assets/images/plus.png"
              alt="plus"
              height="35px"
              width="35px"
            />
          </span>
        </div>
        <div className="questionbox">
          <span className="faq">
            <p>Where can I watch?</p>
            <img
              src=".//Assets/images/plus.png"
              alt="plus"
              height="35px"
              width="35px"
            />
          </span>
        </div>
        <div className="questionbox">
          <span className="faq">
            <p>How do I cancel?</p>
            <img
              src=".//Assets/images/plus.png"
              alt="plus"
              height="35px"
              width="35px"
            />
          </span>
        </div>
        <div className="questionbox">
          <span className="faq">
            <p>What can I watch on Netflix?</p>
            <img
              src=".//Assets/images/plus.png"
              alt="plus"
              height="35px"
              width="35px"
            />
          </span>
        </div>
        <div className="questionbox">
          <span className="faq">
            <p>Is Netflix good for Kids?</p>
            <img
              src=".//Assets/images/plus.png"
              alt="plus"
              height="35px"
              width="35px"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="content2">
    <p>
      Ready to watch? Enter your email to create or restart your membership.
    </p>
    <div className="search">
      <input type="text" placeholder="Email address" />
      <button className="btn">Get Started ;</button>
    </div>
  </div>
  <footer>
    <div className="call">
      <u>
        <a href=""> Questions? Contact us.</a>
      </u>
    </div>
    <div className="foot-grid">
      <div className="foot">
        <a href="#">FAQ</a>
        <a href="#">Investor Relations</a>
        <a href="#">Privacy</a>
        <a href="#">Speed Test</a>
      </div>
      <div className="foot">
        <a href="#">Help Centre</a>
        <a href="#">Jobs</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Legal Notices</a>
      </div>
      <div className="foot">
        <a href="#">Accounts</a>
        <a href="#">Ways To Watch</a>
        <a href="#">Corporate Information</a>
        <a href="#">Only on Netflix</a>
      </div>
      <div className="foot">
        <a href="#">Media centre</a>
        <a href="#">Terms of Use</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
    <div className="last-lines">
      <button className="btn-select">English</button>
      <br />
      <br />
      <br />
      <p>Netflix Pakistan</p>
    </div>
    <div className="last-line">
      <p>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <a href="">Learn more.</a>
      </p>
      <a href=""></a>
    </div>
    <a href=""></a>
  </footer>
  <a href="">
    <br />
  </a>
</>
}
export default ProjectNetflix;