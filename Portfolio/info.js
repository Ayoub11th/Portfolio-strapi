let info = {
  name: "Ayoub Masnouhou",
  logo_name: "Ayoub",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Bienvenue chez moi, je m'appelle Ayoub Masnouhou en M2 Développement Web. De l'expérience en Back-end principalement sous NodeJS, PHP mais un peu de front-end sous VueJS et React.",
  links: {
    linkedin: "#",
    github: "https://github.com/Ayoub11th",
    resume: "https://drive.google.com/file/d/1S9GG03bVZFfEAgSIcPFSR9x4ZtatFXJO/view?usp=sharing",
  },
  education: [
    {
      name: "Ynov Campus Paris",
      place: "Nanterre",
      date: "octobre 2019 - present",
      degree: "Mastere Expert Developpement Web",
      description:
        "",
      skills: [
        "Developpement Web",
        "Backend / Frontend"
      ]
    },
  ],
  experience: [
    {
      name: "Odigo",
      place: "Issy les Moulineaux, France",
      date: "1 Octobre 2020 - Présent",
      position: "Alternant en Développeur Web",
      description:
        "",
      skills: ["HTML5", "CSS3", "Java", "JavaScript", "Json", "Maven"]
    },
    {
      name: "StyQR",
      place: "Paris, France",
      date: "Nov 2018 - Dec 2018",
      position: "Stage en développement Web",
      description:
        "",
      skills: ["Java", "PHP", "JavaScript", "Test unitaire"]
    },
    {
      name: "Aredjal Consulting",
      place: "Agadir, Maroc",
      date: "Juin 2018 - Juillet 2018",
      position: "Stage en développement",
      description: "Stage dans le but de développer mes compétences et de me perfectionner",
      skills: ["PHP", "SQL", "Test unitaire"]
    },
  ],
  skills: [
    {
      title: "Langage",
      info: [
        {
          pictures : "logo/php.png"
        },
        {
          pictures : "logo/nodejs.png"
        },
        {
          pictures : "logo/html.png"
        },
        {
          pictures : "logo/react.png"
        },
        {
          pictures : "logo/vuejs.png"
        },
      ],
      icon: "fa fa-code"
    },

    {
      title: "Front-end",
      info: [
        {
          pictures : "logo/html.png"
        },
        {
          pictures : "logo/css.png"
        },
        {
          pictures : "logo/bootstrap.png"
        },
        {
          pictures : "logo/tailwind.png"
        },
        {
          pictures : "logo/javascript.png"
        },
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Back-end",
      info: [
        {
          pictures : "logo/nodejs.png"
        },
        {
          pictures : "logo/react.png"
        },
        {
          pictures : "logo/php.png"
        },
      ],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio: [
    {
      name: "Facemock",
    pictures: [
      {
        img: require("./src/assets/portfolio/facemock/facemock.jpg")
      },
      {
        img: require("./src/assets/portfolio/facemock/facemock2.jpg")
      },
    ],
    technologies: ["React Native", "CSS"],
    category: "Mobile App",
    date: "Janvier 2021",
    github:
      "https://github.com/Ayoub11th/reactsolo",
    description:
      "Projet dans le but d'une initiation à la stack React Native et des PWA."
    },
    {
      name: "e-Commerce",
      pictures: [
        {
          img: require("./src/assets/portfolio/ecommerce/1.png")
        },
      ],
      technologies: ["Symfony", "HTML", "TSQL"],
      category: "Web App",
      date: "9 Juin 2020",
      github:
        "https://github.com/Ayoub11th/Symfony",
      description:
        "Création d'un site eCommerce en Symfony comprenant toutes les fonctionnalités de base + partie administrateur"         
    },
    {
      name: "Try and Buy",
      pictures: [
        {
          img: require("./src/assets/me.png")
        },
      ],
      technologies: ["NodeJS", "React", "MongoDB"],
      category: "Web App",
      date: "Novembre 2021",
      github:
        "https://github.com/Ayoub11th/Try-Buy",
      description:
        "Projet de site d'ecommerce permettant la coordination Front & Back (API + partie administrateur + partie front)."
    },
  ],
};

export default info;
