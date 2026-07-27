import "./LatestNews.css";

import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpg";
import news3 from "../../assets/images/news3.jpg";

function LatestNews() {
  return (
    <section className="latest-news" id="news">
      <div className="container">

        <h5>LATEST NEWS</h5>
        <h2>Stay Updated with EduNova</h2>

        <div className="news-grid">

          {/* News Card 1 */}
          <div className="news-card">
            <img src={news1} alt="Annual Sports Championship" />

            <div className="news-content">
              <span className="news-date">📅 20 July 2026</span>

              <h3>Annual Sports Championship 2026</h3>

              <p>
                Our students displayed outstanding teamwork and sportsmanship,
                making this year's championship a memorable success.
              </p>

              <a href="#">Read More →</a>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="news-card">
            <img src={news2} alt="Science & Innovation Fair" />

            <div className="news-content">
              <span className="news-date">📅 12 July 2026</span>

              <h3>Science & Innovation Fair</h3>

              <p>
                Students presented creative science projects and innovative
                ideas, impressing teachers, parents, and visitors alike.
              </p>

              <a href="#">Read More →</a>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="news-card">
            <img src={news3} alt="Admissions Open" />

            <div className="news-content">
              <span className="news-date">📅 5 July 2026</span>

              <h3>Admissions Open for 2026–27</h3>

              <p>
                Admissions are now open from Nursery to Class XII. Join
                EduNova and become part of a vibrant learning community.
              </p>

              <a href="#">Read More →</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default LatestNews;