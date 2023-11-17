import { useState } from "react";
import "./App.scss";
import avatarImg from "./assets/images/avatarUser.jpg";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("default");

  return (
    <div className={`container-page ${selectedTheme}`}>
      <div className="header">
        <div className="logo">
          <h1 className="text-logo">Cheng Peng</h1>
        </div>
        <div className="btn-change-theme">
          <label htmlFor="themeSelect">Choose a color:</label>
          <select
            id="themeSelect"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="red-theme">Red</option>
            <option value="green-theme">Green</option>
            <option value="yellow-theme">Yellow</option>
          </select>
        </div>
      </div>
      <div className="content">
        <div className="section-list">
          <div className="section-item">
            <h2 className="section-item__title">Personal Information</h2>
            <div className="divide-line"></div>
            <div className="section-item__content personal-information">
              <img src={avatarImg} alt="avatar" />
              <ul className="contact">
                <li>Number: 0935411853</li>
                <li>Email: abel.phan@avepoint.com</li>
                <li>Location: Danang</li>
              </ul>
            </div>
          </div>
          <div className="section-item">
            <h2 className="section-item__title">Education</h2>
            <div className="divide-line"></div>
            <div className="section-item__content education">
              <ul className="education-list">
                <li>Hanoi University of Science and Technology</li>
                <li>Hanoi University of Science and Technology</li>
              </ul>
            </div>
          </div>
          <div className="section-item">
            <h2 className="section-item__title">Skill</h2>
            <div className="divide-line"></div>
            <div className="section-item__content skill">
              <ol className="education-list">
                <li>Typescript</li>
                <li>Javascript</li>
              </ol>
            </div>
          </div>
          <div className="section-item">
            <h2 className="section-item__title">Project</h2>
            <div className="divide-line"></div>
            <div className="section-item__content project">
              <div className="project-item">
                <div className="project-item__name">Zalo app real time</div>
                <ul className="description">
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                </ul>
              </div>
              <div className="project-item">
                <div className="project-item__name">Zalo app real time</div>
                <ul className="description">
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                </ul>
              </div>
              <div className="project-item">
                <div className="project-item__name">Zalo app real time</div>
                <ul className="description">
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                </ul>
              </div>
              <div className="project-item">
                <div className="project-item__name">Zalo app real time</div>
                <ul className="description">
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                </ul>
              </div>
              <div className="project-item">
                <div className="project-item__name">Zalo app real time</div>
                <ul className="description">
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                </ul>
              </div>
              <div className="project-item">
                <div className="project-item__name">Zalo app real time</div>
                <ul className="description">
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
