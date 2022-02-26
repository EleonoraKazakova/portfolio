import Restaurant_img from "../images/restaurant.jpg";
import BBQ_img from "../images/bbq.jpg";
import LMS_img from "../images/lms.jpg";
import Netflix_img from "../images/netflix.jpg";
import TodoList_img from "../images/todolist.jpg";
import Package_img from "../images/package.jpg";

export const data = {
  cards: [
    {
      id: "0",
      name: "Vegan restaurant",
      img: Restaurant_img,
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
      tech: [""],
      text: "The project is in development",
      git: "",
      web: "",
      status: false,
    },
  ],
};
