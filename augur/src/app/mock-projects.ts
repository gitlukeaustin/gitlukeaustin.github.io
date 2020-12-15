import { Project } from './project';

export const PROJECTS : Project[] = [
    {
        id: 1, year: 2018, description: "A traditional tile based game", 
        title: "Honshu", code: "https://gitlab.com/jonath20e/Honshu", demo: "", language: "C", tool: "libsdl",
        image: "./assets/images/honshu.png",
        details: "This project was created with 3 other students. The idea of the game is to place tiles and gain points. The project also contains a solver. The included screenshot is the console version of the game because libsdl isn't working on my machine."
    },
    {
        id: 2, year: 2019, description: "A 3d action roguelike", 
        title: "Biome", code: "https://gitlab.com/Atchoom/biome", demo: "https://www.youtube.com/watch?v=RRjrrGLzHUc", language: "C#", tool: "Unity",
        image: "./assets/images/biome.png",
        details: "Created with four other students, Biome is a video game where the goal is to get from the center of a procedurally generatied world to the outer rim, all while battling a series of increasingly challenging enemies. The game is still in development."
    },
    {
        id: 3, year: 2018, description: "The classic arcade game", 
        title: "Snake", code: "https://github.com/gitlukeaustin/snake", demo: "", language: "C", tool:"",
        image: "",
        details: "In this game the goal is to collect dots as a snake. Collecting dots increases the size of the snake. If the player runs into themselves the game ends."
    },
    {
        id: 4, year: 2017, description: "A soundwave viewer", 
        title: "Glas", code: "https://github.com/gitlukeaustin/GLAS", demo: "", language: "Java", tool: "",
        image: "",
        details: "Created with 3 other students for our final IUT project, Glas is a simple soundwave viewer and music creation tool."
    },
    {
        id: 5, year: 2016, description: "The classic puzzle game", 
        title: "Sudoku", code: "https://github.com/gitlukeaustin/sudoku", demo: "", language: "Java", tool: "",
        image: "./assets/images/sudoku.png",
        details: "This is a simple desktop version of the game Sudoku. It also contains a solver."
    },
    {
        id: 6, year: 2018, description: "A 2 player web based card game", 
        title: "FFE", code: "", demo: "", language: "Javascipt", tool: "VueJS",
        image: "./assets/images/ffe.png",
        details: "Made with 3 other students for a web programming class, the idea was to create a site where players could log in and play a simple card game with another user."
    },
    {
        id: 7, year: 2019, description: "A single level platformer", 
        title: "Platformer", code: "", demo: "http://web4.ensiie.fr/~bouyer/IHM/Gamepad2019/1/", language: "C#", tool: "Unity",
        image: "./assets/images/platformer.png",
        details: "This was a simple platformer created with one other student to study game feel."
    },
    {
        id: 8, year: 2018, description: "A procedurally generated labyrinth", 
        title: "Labyrinth", code: "https://github.com/gitlukeaustin/caml", demo: "", language: "OCaml", tool: "",
        image: "",
        details: "The labyrinth could be on a hexagon or square grid. It was created to learn about recursion and fonctional programming."
    },
    {
        id: 9, year: 2015, description: "A game about exploring a library", 
        title: "Library Game", code: "", demo: "http://game.lib.dept.ku.edu/?fbclid=IwAR0t8Y9_6XhOMAw8yyJsYrKs5s3ZSaW7MuPjhy4MjnsOytYSJdgk9SkziU4", language: "HTML", tool: "Twine",
        image: "./assets/images/library.png",
        details: "Created with three other students, this was the first game I've ever participated in creating. It was made with Twine so hardly any coding was involved. It became used by the University of Kansas as an educational tool. You can play it by following the Demo link."
    },
    {
        id: 11, year: 2019, description: "A video game about avoiding raptors",
        title: "Raptor Game", code:"", demo:"", image:"",language:"C++",tool:"OpenGL",
        details:"Created in a 3d rendering class, the goal of this simple game is to collect apples and avoid raptors."
    }
    /*{
        id: 10, year: 2015, description: "A fan made music video", 
        title: "Roller Mobster", code: "", demo: "", language: "OCaml", tool: "",
        image: "",
        details: "I just helped with scouting and screen writing. It's a music video, so there aren't a whole lot of words. It was nominated for a small festival called Paris Music Awards."
    }*/

    
]