import Restaurant_img from "../images/restaurant.jpg";
import BBQ_img from "../images/bbq.jpg";
import LMS_img from "../images/lms.jpg";
import Netflix_img from "../images/netflix.jpg";
import TodoList_img from "../images/todolist.jpg";
import TodoList_project from "../images/to-do.jpg";

import Package_img from "../images/package.jpg";

// Data format, for now, i wont remove points, but use a JSON for next projects.
// You will need to check how to integrate an image using jsons.
// That being said, -1 for not putting this file in a data/ folder
export const data = {
  projects: [
    {
      id: "0",
      name: "Vegan restaurant",
      img: Restaurant_img,
      imgProject: "",
      tech: [""],
      text: "",
      git: "",
      web: "",
      status: false,
    },
    {
      id: "1",
      name: "Package tracker",
      img: Package_img,
      imgProject: "",
      tech: [""],
      text: "",
      git: "",
      web: "",
      status: false,
    },
    {
      id: "2",
      name: "Todo list",
      img: TodoList_img,
      imgProject: TodoList_project,
      tech: ["JavaScript", "HTML", "CSS", "React"],
      text: "This is a todo list app which allows you to add items, sort them by name, mark them done and store the list on your web browser. It uses:",
      git: "https://github.com/EleonoraKazakova/novare",
      web: "http://eleonorakazakova.github.io/novare",
      status: true,
    },
    {
      id: "3",
      name: "BBQ Restaurant",
      img: BBQ_img,
      imgProject: "",
      tech: [""],
      text: "",
      git: "",
      web: "",
      status: false,
    },
    {
      id: "4",
      name: "LMS",
      img: LMS_img,
      imgProject: "",
      tech: [""],
      text: "",
      git: "",
      web: "",
      status: false,
    },
    {
      id: "5",
      name: "Netflix clone",
      img: Netflix_img,
      imgProject: "",
      tech: [""],
      text: "The project is in development",
      git: "",
      web: "",
      status: false,
    },
  ],
};
