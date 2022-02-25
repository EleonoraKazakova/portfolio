import Restaurant_img from "../images/restaurant.jpg";
import BBQ_img from "../images/bbq.jpg";
import LMS_img from "../images/lms.jpg";
import Netflix_img from "../images/netflix.jpg";
import TodoList_img from "../images/todolist.jpg";
import Package_img from "../images/package.jpg";

export default function Cards() {
  const cards = [];
  return (
    <div className="portfolio-photo-block">
      <div className="portfolio-photo-name">
        <img src={Restaurant_img} className="portfolio-photo" />
        <p>Vegan restaurant</p>
      </div>
      <div className="portfolio-photo-name">
        <img src={Package_img} className="portfolio-photo" />
        <p>Package tracker</p>
      </div>

      <div className="portfolio-photo-name">
        <img src={TodoList_img} className="portfolio-photo" />
        <p>Todo list</p>
      </div>
      <div className="portfolio-photo-name">
        <img src={BBQ_img} className="portfolio-photo" />
        <p>BBQ Restaurant</p>
      </div>

      <div className="portfolio-photo-name">
        <img src={LMS_img} className="portfolio-photo" />
        <p>LMS</p>
      </div>
      <div className="portfolio-photo-name">
        <img src={Netflix_img} className="portfolio-photo" />
        <p>Netflix clone</p>
      </div>
    </div>
  );
}
