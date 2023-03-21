import React from "react";
import './About.css'
const About = () => {
  let message = "";
  return (
    <section className="section-white" id="Aboutus">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-centre d-flex justify-content-center">
            <h2 className="section-title">THE TEAM BEHIND KRISHAK</h2>
            <p className="section-subtitle">{message}</p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src= "https://img.freepik.com/free-icon/user_318-563642.jpg"
                className="team-img"
                alt="haaha"
              ></img>
              <h3> PHALESH MISHRA</h3>
              <div className="team-info">
                <p>BACKEND DEVELOPER</p>
                <p>Phalesh is a backend developer who specializes in web applications. He is responsible for developing and maintaining the server-side of the application.</p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="LinkedIn">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gmail">
                      <i className="fa-sharp fa-regular fa-envelope"></i>
                    </a>
                  </li>
                  {/* <li><a href='#'>
        <i className='fa fa-twitter'></i>
      </a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                className="team-img"
                alt="haaha"
              ></img>
              <h3>AMAN SAXENA</h3>
              <div className="team-info">
                <p>FRONTEND DEVELOPER</p>
                <p>Aman is a frontend developer who specializes in web applications. He is responsible for developing and maintaining the client-side of the application.</p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="LinkedIn">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gmail">
                      <i className="fa-sharp fa-regular fa-envelope"></i>
                    </a>
                  </li>
                  {/* <li><a href='#'>
        <i className='fa fa-twitter'></i>
      </a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                className="team-img"
                alt="haaha"
              ></img>
              <h3>PRABHAKAR</h3>
              <div className="team-info">
                <p>Full Stack Developer</p>
                <p>Prabhakar is a frontend developer who specializes in web applications. He is responsible for developing and maintaining the client-side of the application.</p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="LinkedIn">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gmail">
                      <i className="fa-sharp fa-regular fa-envelope"></i>
                    </a>
                  </li>
                  {/* <li><a href='#'>
        <i className='fa fa-twitter'></i>
      </a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                className="team-img"
                alt="haaha"
              ></img>
              <h3>GUNJAN GUPTA</h3>
              <div className="team-info">
                <p>FRONT END DEVELOPER</p>
                <p>Gunjan is a frontend developer who specializes in web applications. He is responsible for developing and maintaining the client-side of the application.</p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="LinkedIn">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gmail">
                      <i className="fa-sharp fa-regular fa-envelope"></i>
                    </a>
                  </li>
                  {/* <li><a href='#'>
        <i className='fa fa-twitter'></i>
      </a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                className="team-img"
                alt="haaha"
              ></img>
              <h3>AAKANSHA MISHRA</h3>
              <div className="team-info">
                <p>FRONT END DEVELOPER</p>
                <p>Aakansha is a frontend developer who specializes in web applications. He is responsible for developing and maintaining the client-side of the application.</p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="LinkedIn">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gmail">
                      <i className="fa-sharp fa-regular fa-envelope"></i>
                    </a>
                  </li>
                  {/* <li><a href='#'>
        <i className='fa fa-twitter'></i>
      </a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
