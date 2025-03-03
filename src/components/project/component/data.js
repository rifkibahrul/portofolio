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
            "Inflame is an e-commerce project that I created to explore my skills with the goal of learning about e-commerce and web technology.",
        technology: "PHP, Laravel, Tailwindcss, Vue JS, Alphine JS, API, MySQL",
        repository: "https://github.com/rifkibahrul/laravel-vue-ecommerce",
        status: "complete",
    },
    {
        id: 2,
        name: "Personal Portofolio",
        image: Portofolio,
        description:
            "This personal portfolio website showcases my professional experience and skills as a web developer.",
        technology: "React JS, Tailwind CSS, Javascript",
        repository: "https://github.com/rifkibahrul/portofolio",
        status: "uncomplete",
    },
    {
        id: 3,
        name: "Desanet",
        image: Desanet,
        description:
            "Desanet is a website that shows information about a village and its potential resources.",
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
