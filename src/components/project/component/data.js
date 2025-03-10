import Inflame from "../../../assets/images/inflame.jpg";
import Desanet from "../../../assets/images/desanet.jpg";
import Portofolio from "../../../assets/images/portofolio.jpg";
import Siperu from "../../../assets/images/siperu.png";

export const projects = [
    {
        id: 1,
        name: "Inflame Store",
        image: Inflame,
        description:
            "Inflame is an e-commerce project that I created to explore my skills with the goal of learning about e-commerce and web technology. I was especially curious about integrating APIs into Vue.js, so I turned this project into a hands-on experiment! I used Vue.js to create the admin panel, making it easier to manage products, orders, and users.",
        technology: "PHP, Laravel, Tailwindcss, Vue JS, Alphine JS, API, MySQL",
        repository: "https://github.com/rifkibahrul/laravel-vue-ecommerce",
        status: "complete",
    },
    {
        id: 2,
        name: "Personal Portofolio",
        image: Portofolio,
        description:
            "This personal portfolio website is my way of showcasing my skills and experience as a web developer. I’ve always been curious about React.js, so I decided to challenge myself by building my portfolio with it! It’s not just a place to display my work—it’s also a fun project where I get to explore and learn more about React in the process.",
        technology: "React JS, Tailwind CSS, Javascript",
        repository: "https://github.com/rifkibahrul/portofolio",
        status: "uncomplete",
    },
    {
        id: 3,
        name: "Desanet",
        image: Desanet,
        description:
            "Desanet is a website that showcases information about villages and their resource potential. I built this web app as part of my final project for a programming course. In this project, I took on the role of backend developer, making sure everything runs smoothly behind the scenes.",
        technology: "HTML 5, Bootstrap, CSS 3, JavaScript, PHP Native, MySQL",
        repository: "",
        status: "complete",
    },
    {
        id: 4,
        name: "Siperu",
        image: Siperu,
        description: "SIPERU is a web-based room rental platform that facilitates easy and eficient room booking and management, helping to increase room utilization and minimize booking conflict.",
        technology: "HTML 5, Bootstrap, CSS 3, JavaScript, PHP Native, MySQL",
        repository: "https://github.com/farhanmaul987/siperu",
        status: "complete",
    },
];
