import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  work = {
    title: "WORK EXPERIENCE", 
    data:[
    {
        english: {
          position:"Engineering Apprentice",
          details:[
            "Creation of components for Scandinavian energy market software with AngularJS, JavaScript, C#/.NET, SQL Server, HTML/CSS",
            "Testing with Ranorex",
            "Technical documentation",
            "Collaboration with an Agile team"
          ]
        },
        french: {
          position:"Apprenti Ingénieur",
          details:[
            "Création de tableaux de bord pour un logiciel de gestion des marchés électriques Scandinaves avec AngularJS, JavaScript, C#/.NET, SQL Server, HTML/CSS",
            "Écriture de tests techniques avec Ranorex",
            "Rédaction de documentation technique",
            "Travail Collaboratif avec une équipe Agile"
          ]
        },
        start:2017,end:2020,location:"GE Grid Solutions, Massy",
      },
      {
        english : {
          position:"Web Developper Apprentice",
          details:[
            "Creation of dynamic web sites to modify the rectorate’s servers with PHP, JavaScript, jQuery, HTML/CSS, Ajax",
            "Total CSS update of an educational website (WIMS)"
          ]
        },
        french : {
          position:"Apprenti Développeur",
          details:[
            "Création de sites web dynamiques pour modifier les serveurs du DSI avec PHP, JavaScript, jQuery, HTML/CSS, Ajax",
            "Mise à jour complet du CSS d’un site web pédagogique (WIMS)"
          ]
        },
        start:2016,end:2017,location:"Rectorat de L’académie de Versailles, Versailles",
      }
    ]
  };

  school = {
    title: "EDUCATION", 
    data:[
      {
        english: {
          degree:"Engineering Degree In Computer Science - option JIN (Jeux Vidéo et Intéractions Numériques)"
        },
        french: {
          degree:"Diplôme d’Ingénieur Spécialité Informatique option JIN (Jeux Vidéo et Intéractions Numériques)"
        },
        start:2017,end:"2020",location:"ENSIIE, Evry"},
      {
        english: {
          degree:"University Diploma of Technology in Computer Science"
        },
        french: {
          degree:"DUT Informatique"
        },
      start:2015,end:2017,location:"IUT Sénart Fontainebleau, Fontainebleau"},
      {
        english: {
          degree:"Bachelor of Arts in Film and Media Studies (Bac +3)"
        },
        french: {
          degree:"Bachelor of Arts in Film and Media Studies (Bac +3)"
        },
        start:2013,end:2015,location:"University of Kansas, Lawrence Kansas"
      }
    ]
  };
  
  projects = {
    title:"",
    data: [
    {
        id: 5, year: 2019, 
        english:{
          description: "A 3d action roguelike", 
          details: "Created with four other students, the goal of the game is to get from the center of a procedurally generated world to the outer rim, all while battling a series of increasingly challenging enemies. The game is still in development."
        },
        french:{
          description: "Un jeu d'action roguelike 3D", 
          details: "Créé avec 3 autres étudiants, le but du jeu est de se déplacer du centre d'un monde généré procéduralement au bord extérieur, tout en combattant une série d'ennemis de plus en plus difficiles. Le jeu est toujours en développement."
        },
        title: "Biome", code: "https://gitlab.com/Atchoom/biome", demo: "https://www.youtube.com/watch?v=RRjrrGLzHUc", language: "C#", tool: "Unity",
        image: "biome.png"
    },
    {
        id: 6, year: 2019, 
        english:{
          description: "A single level platformer", 
          details: "This was a simple platformer created with one other student to study game feel, feedback and user experience.",
        },
        french:{
          description: "Un jeu platformer", 
          details: "Il s'agissait d'un simple jeu de plateforme créé avec un autre étudiant pour étudier le game feel et l'expérience utilisateur."
        },
        title: "Platformer", code: "", demo: "http://web4.ensiie.fr/~bouyer/IHM/Gamepad2019/1/", language: "C#", tool: "Unity",
        image: "platformer.png"
    },
    {
        id: 7, year: 2015, 
        english: {
          description:"A game about exploring a library",
          details:"Created with three other film students, this was my first attempt at video game development. It eventually was finished and used by the University of Kansas as an educational tool. You can play it by following the Demo link."
        },
        french: {
          desription:"Un jeu d'aventure dans une bibliothèque",
          details:"Créé avec trois autres étudiants en cinéma, c'était ma première tentative de développement de jeux vidéo. Il a finalement été terminé et utilisé par l'Université du Kansas comme outil pédagogique. Vous pouvez y jouer en suivant le lien Démo."
        },
        title: "Library Game", demo: "http://game.lib.dept.ku.edu/?fbclid=IwAR0t8Y9_6XhOMAw8yyJsYrKs5s3ZSaW7MuPjhy4MjnsOytYSJdgk9SkziU4", language: "HTML", tool: "Twine",
        image: "library.png"
    },
    {
        id: 8, year: 2018,
        english:{
          description: "A 2 player web based card game", 
          details: "Made with 3 other students for a web programming class, the idea was to create a site where players could log in and play a simple card game with another user."
        },
        french:{
          description: "Un jeu de carte à 2 joueurs", 
          details: "Réalisé avec 3 autres étudiants pour un cours de programmation Web, l'idée était de créer un site où les joueurs pouvaient se connecter et jouer à un simple jeu de cartes avec un autre utilisateur."
        },
        title: "FFE", code: "https://github.com/gitlukeaustin/ffe", language: "Javascipt", tool: "VueJS",
        image: "ffe.png", demo: "https://codepen.io/lukeaustin/pen/BaWLqJK",
    },
    {
        id: 9, year: 2018, 
        english:{
          description: "A traditional tile based game", 
          details: "This project was created with 3 other students. The idea of the game is to place tiles and gain points. The project also contains a solver. The included screenshot is the console version of the game.",
        },
        french:{
          description: "Un jeu de cartes traditionnel", 
          details: "Ce projet a été réalisé avec 3 autres étudiants. L'idée du jeu est de placer des tuiles et de gagner des points. Le projet contient également un solveur. La capture d'écran incluse est la version console du jeu."
        },
        title: "Honshu", code: "https://gitlab.com/jonath20e/Honshu", language: "C", tool: "libsdl",
        image: "honshu.png"
    },
    {
        id: 11, year: 2016, 
        english:{
          description: "", 
          details: "This is a simple desktop version of the game Sudoku. It also contains a solver.",
        },
        french:{
          description: "", 
          details: "Ceci est une version simple du jeu Sudoku. Il contient également un solveur."
        },
        title: "Sudoku", code: "https://github.com/gitlukeaustin/sudoku", language: "Java",
        image: "sudoku.png"
    }
    /*,
    {
        id: 109, year: 2018, description: "", 
        title: "Honshu", code: "https://gitlab.com/jonath20e/Honshu", language: "C", tool: "libsdl",
        image: "honshu.png",
        details: "",
        english: false
    },
    {
        id: 111, year: 2016, description: "Le jeu Sudoku", 
        title: "Sudoku", code: "https://github.com/gitlukeaustin/sudoku", language: "Java",
        image: "sudoku.png",
        details: "Ceci est une version simple du jeu Sudoku. Il contient également un solveur.",
        english: false
    },
    {
        id: 10, year: 2018, description: "The classic arcade game", 
        title: "Snake", code: "https://github.com/gitlukeaustin/snake", language: "C", 
        image: "",
        details: "In this game the goal is to collect dots as a snake. Collecting dots increases the size of the snake. If the player runs into themselves the game ends."
    },
    {
        id: 8, year: 2018, description: "A procedurally generated labyrinth", 
        title: "Labyrinth", code: "https://github.com/gitlukeaustin/caml", language: "OCaml",
        image: "",
        details: "The labyrinth could be on a hexagonal or square grid. It was created to learn about recursion and fonctional programming."
    },
    {
        id: 15, year: 2017, description: "A soundwave viewer", 
        title: "Glas", code: "https://github.com/Ackincolor/GLAS", language: "Java",
        image: "",
        details: "Created with 3 other students for our final IUT project, Glas is a simple soundwave viewer and music creation tool."
    },
    {
        id: 11, year: 2019, description: "A video game about avoiding raptors",
        title: "Frogland Saga", code:"https://gitlab.com/gitlukeaustin/opengl-jin",language:"C++",tool:"OpenGL",
        details:"Created in a 3d rendering class, the goal of this simple game is to collect apples and avoid raptors."
    },
    {
        id: 10, year: 2015, description: "A fan made music video", 
        title: "Roller Mobster", code: "", demo: "", language: "OCaml", tool: "",
        image: "",
        details: "I just helped with scouting and screen writing. It's a music video, so there aren't a whole lot of words. It was nominated for a small festival called Paris Music Awards."
    }*/
    ]
  };

  laureates = {
    title:"",
    data:[
      {text:{english:"4 Years Of Experience In Web Development",french:"4 Ans D'expérience Développement Web"}},
      {text:{english:"English - French Bilingual",french:"Bilingue Anglais-Français"}},
      {text:{english:"Ranked Top 2% On Codingame.com",french:"Classé Dans Le Top 2% Sur Codingame.com"}}
    ]
  };

  skills = {
    title:"",
    data:[
    {id:1,stars:5,text:"C",star:true,school:true,linkedin:true},
    {id:2,stars:5,text:"Javascript",star:true,school:true,linkedin:true},
    {id:3,stars:5,text:"SQL",star:false,school:true,linkedin:false},
    {id:4,stars:4,text:"PHP",star:false,school:true,linkedin:true},
    {id:5,stars:4,text:"HTML5",star:false,school:true,linkedin:true},
    {id:6,stars:3,text:"AngularJS",star:false,school:true,linkedin:false},
    {id:6,stars:2,text:"Angular",star:false,school:false,linkedin:false},
    {id:7,stars:3,text:"VueJS",star:false,school:false,linkedin:false},
    {id:8,stars:3,text:"jQuery",star:false,school:true,linkedin:false},
    {id:9,stars:1,text:"Assembly",star:false,school:false,linkedin:false},
    {id:10,stars:1,text:"R",star:false,school:true,linkedin:false},
    {id:11,stars:1,text:"Scala",star:false,school:true,linkedin:false},
    {id:12,stars:2,text:"Ocaml",star:false,school:true,linkedin:false},
    {id:13,stars:2,text:"C++",star:false,school:false,linkedin:false},
    {id:14,stars:3,text:"C#",star:false,school:false,linkedin:false},
    {id:15,stars:3,text:"Python",star:false,school:true,linkedin:true},
    {id:16,stars:3,text:"Bash",star:false,school:true,linkedin:false},
    {id:17,stars:3,text:"Java",star:false,school:true,linkedin:false},
    {id:18,stars:3,text:"CSS",star:false,school:true,linkedin:false},
    {id:19,stars:3,text:"JSON",star:false,school:true,linkedin:false},
    {id:20,stars:3,text:"UML",star:false,school:true,linkedin:false},
    {id:21,stars:3,text:"XML",star:false,school:true,linkedin:false},
    {id:22,stars:1,text:"TeamCity",star:false,school:false,linkedin:false},
    {id:23,stars:1,text:"Postman",star:false,school:true,linkedin:false},
    {id:24,stars:1,text:"Ranorex",star:false,school:false,linkedin:false},
    {id:25,stars:3,text:"Word",star:false,school:true,linkedin:false},
    {id:26,stars:2,text:"Excel",star:false,school:true,linkedin:false},
    {id:27,stars:4,text:"PowerPoint",star:false,school:true,linkedin:false},
    {id:28,stars:7,text:"English",star:true,school:true,linkedin:false},
    {id:29,stars:4,text:"OSX",star:false,school:false,linkedin:false},
    {id:30,stars:3,text:"Linux",star:false,school:false,linkedin:false},
    {id:31,stars:3,text:"Windows",star:false,school:false,linkedin:false},
    {id:29,stars:3,text:"PowerShell",star:false,school:false,linkedin:false},
    {id:30,stars:2,text:"ReactJS",star:false,school:false,linkedin:false},
    {id:29,stars:3,text:"Git",star:false,school:true,linkedin:false},
    {id:30,stars:3,text:"SVN",star:false,school:true,linkedin:false},
    {id:30,stars:3,text:"Blender",star:false,school:true,linkedin:false},
    {id:29,stars:4,text:"Final Cut",star:false,school:true,linkedin:false},
    {id:30,stars:3,text:"Unity",star:false,school:true,linkedin:false}
  ]
};

  constructor() { }

  getProjects() {
    return of(this.projects);
  }

  getProject(id: number) {
    return of(this.projects.data.find(project => project.id == id));
  }

  getSchool() {
    return of(this.school);
  }

  getWork() {
    return of(this.work);
  }

  getSkills() {
    return of(this.skills);
  }

  getLaureates() {
    return of(this.laureates);
  }
}
