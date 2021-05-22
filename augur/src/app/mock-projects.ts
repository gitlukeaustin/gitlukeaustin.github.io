import { Project } from './project';

export const PROJECTS : Project[] = [
    {
        id: 1,
        title: "Skills", 
        details:"<div>C, C#, JavaScript, SQL, PHP</div>\
        <div>Git, SVN, Ranorex, Powershell, TeamCity, Postman</div>\
        <div>XML, HTML, CSS, JSON, UML</div>\
        <div>AngularJS, VueJs, jQuery</div>\
        <div>Assembleur, R, Scala, OCaml</div>\
        <div>C++, Python, Bash, Java</div>\
        <div>Word, Excel, PowerPoint</div>\
        <div>OSX, Linux, Windows</div>\
        <div>Perseverant, Autonomous, Multicultural</div>",
        english:true
    },
    {
        id: 2,
        title: "WORK EXPERIENCE", 
        details:" <div>\
        <h4>Engineering Apprentice</h4>\
        <h5>2017 - 2020 | GE Grid Solutions, Massy</h5>\
        <ul>\
            <li>Creation of components for Scandinavian energy market software with AngularJS, JavaScript, C#/.NET, SQL Server, HTML/CSS</li> \
            <li>Testing with Ranorex</li> \
            <li>Technical documentation</li> \
            <li>Collaboration with an Agile team</li> \
        </ul> \
    </div>\
    <div>\
        <h4>Web Developper Apprentice</h4> \
        <h5>2016 - 2017 | Rectorat de L’académie de Versailles, Versailles</h5> \
        <ul> \
            <li>Creation of dynamic web sites to modify the rectorate’s servers with PHP, JavaScript, jQuery, HTML/CSS, Ajax</li> \
            <li>Total CSS update of an educational website (WIMS)</li> \
        </ul> \
    </div>",
    english:true
    },
    {
        id: 3,
        title: "EDUCATION", 
        details:"<div> \
        <h4>Engineering Degree In Computer Science - option JIN (Jeux Vidéo et Intéractions Numériques)</h4> \
            <h5>2017 - 2020 |  ENSIIE, Evry</h5> \
            </div> \
            <div> \
            <h4>University Diploma of Technology in Computer Science</h4> \
        <h5>2015 - 2017 | IUT Sénart Fontainebleau, Fontainebleau</h5> \
         </div> \
        <div> \
        <h4>Bachelor of Arts in Film and Media Studies (Bac +3)</h4> \
         <h5>2013 - 2015 | University of Kansas, Lawrence Kansas</h5> \
     </div>",
     english:true
    },
    {
        id: 4,
        title: "INTERESTS AND ACTIVITIES", 
        details:"<div>Animation (Gimp, Blender)</div>\
        <div>Video Game Development (Unity)</div>\
        <div>Video Production (Final Cut)</div>\
        <div>Musical Composition(Audacity, Garageband)</div>",
        english:true
    },
    {
        id: 5, year: 2019, description: "A 3d action roguelike", 
        title: "Biome", code: "https://gitlab.com/Atchoom/biome", demo: "https://www.youtube.com/watch?v=RRjrrGLzHUc", language: "C#", tool: "Unity",
        image: "biome.png",
        details: "Created with four other students, the goal of the game is to get from the center of a procedurally generated world to the outer rim, all while battling a series of increasingly challenging enemies. The game is still in development.",
        english:true
    },
    {
        id: 6, year: 2019, description: "A single level platformer", 
        title: "Platformer", code: "", demo: "http://web4.ensiie.fr/~bouyer/IHM/Gamepad2019/1/", language: "C#", tool: "Unity",
        image: "platformer.png",
        details: "This was a simple platformer created with one other student to study game feel, feedback and user experience.",
        english:true
    },
    {
        id: 7, year: 2015, description: "A game about exploring a library", 
        title: "Library Game", demo: "http://game.lib.dept.ku.edu/?fbclid=IwAR0t8Y9_6XhOMAw8yyJsYrKs5s3ZSaW7MuPjhy4MjnsOytYSJdgk9SkziU4", language: "HTML", tool: "Twine",
        image: "library.png",
        details: "Created with three other film students, this was my first attempt at video game development. It eventually was finished and used by the University of Kansas as an educational tool. You can play it by following the Demo link.",
        english:true
    },
    {
        id: 8, year: 2018, description: "A 2 player web based card game", 
        title: "FFE", code: "https://github.com/gitlukeaustin/ffe", language: "Javascipt", tool: "VueJS",
        image: "ffe.png",
        details: "Made with 3 other students for a web programming class, the idea was to create a site where players could log in and play a simple card game with another user.",
        english:true
    },
    {
        id: 9, year: 2018, description: "A traditional tile based game", 
        title: "Honshu", code: "https://gitlab.com/jonath20e/Honshu", language: "C", tool: "libsdl",
        image: "honshu.png",
        details: "This project was created with 3 other students. The idea of the game is to place tiles and gain points. The project also contains a solver. The included screenshot is the console version of the game.",
        english:true
    },
    {
        id: 11, year: 2016, description: "The classic puzzle game", 
        title: "Sudoku", code: "https://github.com/gitlukeaustin/sudoku", language: "Java",
        image: "sudoku.png",
        details: "This is a simple desktop version of the game Sudoku. It also contains a solver.",
        english:true
    },
    {
        id: 100,
        title: "Compétences", 
        details:"<div>C, C#, JavaScript, SQL, PHP</div>\
        <div>Git, SVN, Ranorex, Powershell, TeamCity, Postman</div>\
        <div>XML, HTML, CSS, JSON, UML</div>\
        <div>AngularJS, VueJs, jQuery</div>\
        <div>Assembleur, R, Scala, OCaml</div>\
        <div>C++, Python, Bash, Java</div>\
        <div>Word, Excel, PowerPoint</div>\
        <div>OSX, Linux, Windows</div>\
        <div>Persévérant, Autonome, Multiculturel</div>",
        english:false
    },
    {
        id: 102,
        title: "Expériences", 
        details:" <div>\
        <h4>Apprenti Ingénieur</h4>\
        <h5>2017 - 2020 | GE Grid Solutions, Massy</h5>\
        <ul>\
            <li>Création de tableaux de bord pour un logiciel de gestion des marchés électriques Scandinaves avec AngularJS, JavaScript, C#/.NET, SQL Server, HTML/CSS</li> \
            <li>Écriture de tests techniques avec Ranorex</li> \
            <li>Rédaction de documentation technique</li> \
            <li>Travail Collaboratif avec une équipe Agile</li> \
        </ul> \
    </div>\
    <div>\
        <h4>Apprenti Développeur</h4> \
        <h5>2016 - 2017 | Rectorat de L’académie de Versailles, Versailles</h5> \
        <ul> \
            <li>Création de sites web dynamiques pour modifier les serveurs du DSI avec PHP, JavaScript, jQuery, HTML/CSS, Ajax</li> \
            <li>Mise à jour complet du CSS d’un site web pédagogique (WIMS)</li> \
        </ul> \
    </div>",
        english:false
    },
    {
        id: 103,
        title: "Education", 
        details:"<div> \
        <h4>Diplôme d’Ingénieur Spécialité Informatique option JIN (Jeux Vidéo et Intéractions Numériques)</h4> \
            <h5>2017 - 2020 |  ENSIIE, Evry</h5> \
            </div> \
            <div> \
            <h4>DUT Informatique</h4> \
        <h5>2015 - 2017 | IUT Sénart Fontainebleau, Fontainebleau</h5> \
         </div> \
        <div> \
        <h4>Bachelor of Arts in Film and Media Studies (Bac +3)</h4> \
         <h5>2013 - 2015 | University of Kansas, Lawrence Kansas</h5> \
     </div>",
        english: false
    },
    {
        id: 104,
        title: "Centres D'Intérêt", 
        details:"<div>Animation (Gimp, Blender)</div>\
        <div>Développement de Jeux Vidéo (Unity) </div>\
        <div>Production Vidéo (Final Cut)</div>\
        <div>Composition Musical (Audacity, Garageband)</div>",
        english:false
    },
    {
        id: 105, year: 2019, description: "Un jeu d'action roguelike 3D", 
        title: "Biome", code: "https://gitlab.com/Atchoom/biome", demo: "https://www.youtube.com/watch?v=RRjrrGLzHUc", language: "C#", tool: "Unity",
        image: "biome.png",
        details: "Créé avec 3 autres étudiants, le but du jeu est de se déplacer du centre d'un monde généré procéduralement au bord extérieur, tout en combattant une série d'ennemis de plus en plus difficiles. Le jeu est toujours en développement.",
        english: false
    },
    {
        id: 106, year: 2019, description: "Un simple jeu platformer", 
        title: "Platformer", code: "", demo: "http://web4.ensiie.fr/~bouyer/IHM/Gamepad2019/1/", language: "C#", tool: "Unity",
        image: "platformer.png",
        details: "Il s'agissait d'un simple jeu de plateforme créé avec un autre étudiant pour étudier le game feel et l'expérience utilisateur.",
        english: false
    },
    {
        id: 107, year: 2015, description: "Un jeu d'aventure dans une bibliothèque", 
        title: "Library Game", demo: "http://game.lib.dept.ku.edu/?fbclid=IwAR0t8Y9_6XhOMAw8yyJsYrKs5s3ZSaW7MuPjhy4MjnsOytYSJdgk9SkziU4", language: "HTML", tool: "Twine",
        image: "library.png",
        details: "Créé avec trois autres étudiants en cinéma, c'était ma première tentative de développement de jeux vidéo. Il a finalement été terminé et utilisé par l'Université du Kansas comme outil pédagogique. Vous pouvez y jouer en suivant le lien Démo.",
        english: false
    },
    {
        id: 108, year: 2018, description: "Un jeu de carte à 2 joueurs", 
        title: "FFE", code: "https://github.com/gitlukeaustin/ffe", language: "Javascipt", tool: "VueJS",
        image: "ffe.png",
        details: "Réalisé avec 3 autres étudiants pour un cours de programmation Web, l'idée était de créer un site où les joueurs pouvaient se connecter et jouer à un simple jeu de cartes avec un autre utilisateur.",
        english: false
    },
    {
        id: 109, year: 2018, description: "Un jeu de cartes traditionnel", 
        title: "Honshu", code: "https://gitlab.com/jonath20e/Honshu", language: "C", tool: "libsdl",
        image: "honshu.png",
        details: "Ce projet a été réalisé avec 3 autres étudiants. L'idée du jeu est de placer des tuiles et de gagner des points. Le projet contient également un solveur. La capture d'écran incluse est la version console du jeu.",
        english: false
    },
    {
        id: 111, year: 2016, description: "Le jeu Sudoku", 
        title: "Sudoku", code: "https://github.com/gitlukeaustin/sudoku", language: "Java",
        image: "sudoku.png",
        details: "Ceci est une version simple du jeu Sudoku. Il contient également un solveur.",
        english: false
    }
    /*
    ,
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
    }
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