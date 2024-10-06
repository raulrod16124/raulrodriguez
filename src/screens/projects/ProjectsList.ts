import matchup from "../../assets/images/matchup.png"
import matchup_1 from "../../assets/images/matchup_image1.jpg"
import matchup_2 from "../../assets/images/matchup_image2.jpg"
import matchup_3 from "../../assets/images/matchup_image3.jpg"
import matchup_4 from "../../assets/images/matchup_image4.jpg"
import matchup_5 from "../../assets/images/matchup_image5.jpg"
import chicmouse from "../../assets/images/chicmouse.png"
import chicmouse_1 from "../../assets/images/chicmouse_image1.png"
import chicmouse_2 from "../../assets/images/chicmouse_image2.png"
import raulrodriguez from "../../assets/images/raulrodriguez.png"
import raulrodriguez_1 from "../../assets/images/raulrodriguez_image1.png"
import raulrodriguez_2 from "../../assets/images/raulrodriguez_image2.png"
import pokedex from "../../assets/images/pokedex.png"
import pokedex_1 from "../../assets/images/pokedex_image1.png"
import pokedex_2 from "../../assets/images/pokedex_image2.png"
import pokedex_3 from "../../assets/images/pokedex_image3.png"
import pokedex_4 from "../../assets/images/pokedex_image4.png"
import pokedex_5 from "../../assets/images/pokedex_image5.png"
import telamonbox from "../../assets/images/telamonbox.png"
import telamonbox_1 from "../../assets/images/telamonbox_image1.png"
import telamonbox_2 from "../../assets/images/telamonbox_image2.png"

export const projects = [
    {
      title: "Matchup",
      description: "Matchup is a card-matching game. It tests your mental skills as you progress through increasingly complex levels, unlocking new content and collecting cards and items.",
      technologies: ["React Native", "Typescript", "Github", "Firebase", "Figma"],
      image: matchup,
      carouselImages: [
        matchup_1,
        matchup_2,
        matchup_3,
        matchup_4,
        matchup_5,
      ],
      demoLink: "https://play.google.com/store/apps/details?id=com.matchupcardgame2023"
    },
    {
      title: "Chicmouse",
      description: "Website to display the mobile applications created and offer users contact information, terms and conditions and privacy policy.",
      technologies: ["React", "Typescript", "Styled-components", "Firebase", "Vite", "Vitest", "CI/CD", "Github", "Jest", "Testing-library", "Figma"],
      image: chicmouse,
      carouselImages: [
        chicmouse_1,
        chicmouse_2
      ],
      demoLink: "https://chicmouse.com",
      repoLink: "https://github.com/raulrod16124/chicmouse"
    },
    {
      title: "Raúl Rodríguez",
      description: "I've built my personal portfolio to showcase my projects and share more about myself with those interested in my work. The site highlights key projects I've developed, providing detailed descriptions and technologies used.",
      technologies: ["React Native", "Firebase", "JavaScript"],
      image: raulrodriguez,
      carouselImages: [
        raulrodriguez_1,
        raulrodriguez_2
      ],
      repoLink: "https://github.com/raulrod16124/raulrodriguez"
    },
    {
        title: "Pokedex",
        description: "Mobile application created to develop mobile programming skills while creating a fun mobile application to pass the time with.",
        technologies: ["React Nartive", "Typescript", "Github"],
        image: pokedex,
        carouselImages: [
          pokedex_1,
          pokedex_2,
          pokedex_3,
          pokedex_4,
          pokedex_5
        ],
        repoLink: "https://github.com/raulrod16124/pokedex"
      },
      {
        title: "Telamón",
        description: "Website created for a crossfit gym that needed a website to show both the information about the center and the competitions that it carries out.",
        technologies: ["Wordpress", "Elementor", "CSS"],
        image: telamonbox,
        carouselImages: [
          telamonbox_1,
          telamonbox_2
        ],
        demoLink: "https://telamon.es/"
      }
]