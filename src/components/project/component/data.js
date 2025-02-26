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
            "Inflame is an e-commerce project that I created to explore my skills with the goal of learning about e-commerce and web technology. This project allowed me to experiment with different concepts and technologies, and gain valuable experience in creating an effective e-commerce platform.",
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
        technology: "HTML 5, Tailwind CSS, Javascript",
        repository: "https://github.com/rifkibahrul/recruitmenDEV",
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
        description: "Sistem Peminjaman Ruangan",
        technology: "HTML 5, Bootstrap, CSS 3, JavaScript, PHP Native, MySQL",
        repository: "",
        status: "complete",
    },
];
