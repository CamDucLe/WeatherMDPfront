import React from "react";
import "./about.css";
import pic1 from "./cam_le.jpg";
import pic2 from "./duong_nguyen.jpg";
import pic3 from "./tam_nguyen.jpg";
import pic4 from "./khoi_le.jpg";
import pic5 from "./nam_nguyen.jpg";
import Navbar from "../../components/Navbar/Navbar";
const About = () => {
  return (
    <div className="About">
      <Navbar />
      <div class="about-section">
        <h1>MDP Group</h1>

        <p>
          <q>
            Learn as if you will live forever, live like you will die tomorrow.
          </q>
        </p>
        <address>Mahatma Gandhi</address>
      </div>
      <div class="content">
      <h2>Team Members</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="img-container"><img src={pic1} alt="Cam" width="300" height="310" /></div>
            <div class="container">
              <div>
                <div><h2>Le Duc Cam</h2>
                <p class="title">Frontend Developer</p>
                <p>
                  A youngster from Vung Tau who is dedicated to learn new things
                  and like to hang out with friends.
                </p></div>
                <div><p><a target="_blank" href="https://www.facebook.com/cuoi.trang.92"><i class="fab fa-facebook"></i></a><a target="_blank" href="https://github.com/Cam-Duc-Le"><i class="fab fa-github"></i></a><a target="_blank" href="https://www.linkedin.com/in/le-duc-cam-4a6853193/"><i class="fab fa-linkedin"></i></a><a target="_blank" href="mailto:cam.levt123@hcmut.edu.vn"><i class="fas fa-envelope"></i></a></p>
                {/*}<p>
                  <a href="https://www.facebook.com/cuoi.trang.92">
                    <button class="button">Contact</button>
                  </a>
                </p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container"><img src={pic2} alt="Duong" width="300" height="310" /></div>
            <div class="container">
              <div>
                <div><h2>Nguyen Le Nhat Duong</h2><p class="title">Backend Developer</p>
                <p>
                Youngblood from Da Nang city who is able to speak 5 different languages fluently.
                </p></div>
                <div><p><a target="_blank" href="https://www.facebook.com/duongnguyennvl"><i class="fab fa-facebook"></i></a><a target="_blank" href="https://github.com/nhatduong01"><i class="fab fa-github"></i></a><a target="_blank" href="duong.nguyen01@hcmut.edu.vn"><i class="fas fa-envelope"></i></a></p>
                {/*}<p>
                  <a href="https://www.facebook.com/duongnguyennvl">
                    <button class="button">Contact</button>
                  </a>
                </p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container"><img src={pic4} alt="Khoi" width="300" height="310" /></div>
            <div class="container">
              <div>
                <div><h2>Le Minh Khoi</h2>
                <p class="title">Team Leader/AI Developer</p>
                <p>
                  Rich kid from District 7 who tries to hide himself under his
                  mask and waits for his chance.
                </p></div>
                <div><p><a target="_blank" href="https://www.facebook.com/lekhoitdn"><i class="fab fa-facebook"></i></a><a target="_blank" href="https://github.com/TokisakiKurumi2001"><i class="fab fa-github"></i></a><a target="_blank" href="https://www.linkedin.com/in/khoi-le-m-8a86631b4/"><i class="fab fa-linkedin"></i></a><a target="_blank" href="khoi.le.pi2001@hcmut.edu.vn"><i class="fas fa-envelope"></i></a></p>
                {/*}<p>
                  <a href="https://www.facebook.com/lekhoitdn">
                    <button class="button">Contact</button>
                  </a>
                </p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container"><img src={pic5} alt="Nam" width="300" height="310" /></div>
            <div class="container">
              <div>
                <div><h2>Nguyen Dinh Nam</h2>
                <p class="title">IoT/Frontend Developer</p>
                <p>
                A quiet Saigonese who loves food, music and dreams to be a Frontend dev.
                </p></div>
                <div><p><a target="_blank" href="https://www.facebook.com/nguyendinhnam20.03"><i class="fab fa-facebook"></i></a><a target="_blank" href="https://github.com/NguyenD-Nam"><i class="fab fa-github"></i></a><a target="_blank" href="https://www.linkedin.com/in/nguyendinhnam0320/"><i class="fab fa-linkedin"></i></a><a target="_blank" href="nam.nguyen.2003@hcmut.edu.vn"><i class="fas fa-envelope"></i></a></p>
                {/*}<p>
                  <a href="https://www.facebook.com/nguyendinhnam20.03">
                    <button class="button">Contact</button>
                  </a>
                </p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container"><img src={pic3} alt="Tam" width="300" height="310" /></div>
            <div class="container">
              <div>
                <div><h2>Nguyen Minh Tam</h2>
                <p class="title">Frontend Developer</p>
                <p>
                Saigonese who loves cats, basketball and enjoys hanging out with friends and family.
                </p></div>
                <div><p><a target="_blank" href="https://www.facebook.com/anhtam.272"><i class="fab fa-facebook"></i></a><a target="_blank" href="https://github.com/GiangHoGoVap"><i class="fab fa-github"></i></a><a target="_blank" href="tam.nguyen2702@hcmut.edu.vn"><i class="fas fa-envelope"></i></a></p>
                {/*}<p>
                  <a href="https://www.facebook.com/anhtam.272">
                    <button class="button">Contact</button>
                  </a>
                </p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default About;
