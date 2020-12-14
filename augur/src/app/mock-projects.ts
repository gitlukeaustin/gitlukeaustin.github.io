import { Project } from './project';

export const PROJECTS : Project[] = [
    {
        id: 1, year: 2018, description: "A traditional tile based game", 
        title: "Honshu", code: "https://gitlab.com/jonath20e/Honshu", demo: "", language: "C", tool: "OpenGL",
        image: "",
        details: "This project was created with 3 other students. The idea pf the game is to place tiles and gain points. The project also contained a solver."
    },
    {
        id: 2, year: 2019, description: "A 3d action roguelike", 
        title: "Biome", code: "https://gitlab.com/Atchoom/biome", demo: "https://www.youtube.com/watch?v=RRjrrGLzHUc", language: "C#", tool: "Unity",
        image: "./assets/images/biome.png",
        details: "This project was created with four other students. It is a video game where the goal is to get from the center of a procedurally generatied world to the outer rim, all while battling a series of increasingly challenging enemies. The game is still in development."
    },
    {
        id: 3, year: 2018, description: "The classic arcade game", 
        title: "Snake", code: "", demo: "", language: "C", tool:"",
        image: "",
        details: "In this game the goal is to collect dots as a snake. Collecting dots increases the size of the snake. If the player runs into themselves the game ends."
    },
    {
        id: 4, year: 2018, description: "A soundwave viewer", 
        title: "Glas", code: "https://github.com/gitlukeaustin/GLAS", demo: "", language: "Java", tool: "",
        image: "",
        details: "This was the final project in my final year at the IUT. It was created with 3 other students and was meant to be a simplified version of Audacity."
    },
    {
        id: 5, year: 2018, description: "The classic puzzle game", 
        title: "Sudoku", code: "", demo: "", language: "Java", tool: "",
        image: "",
        details: "This is a simple desktop version of the game Sudoku. It also contained a solver."
    },
    {
        id: 6, year: 2018, description: "A 2 player web based card game", 
        title: "FFE", code: "", demo: "", language: "Javascipt", tool: "VueJS",
        image: "./assets/images/ffe.png",
        details: "This was for a web programming class, made with 3 other students. The idea was to create a site where players could log in and play a simple card game with another user."
    },
    {
        id: 7, year: 2018, description: "A single level platformer", 
        title: "Platformer", code: "", demo: "", language: "C#", tool: "Unity",
        image: "",
        details: "This was a simple platformer created with one other student to study game feel."
    },
    {
        id: 8, year: 2018, description: "A procedurally generated labyrinth", 
        title: "Labyrinth", code: "https://github.com/gitlukeaustin/caml", demo: "", language: "OCaml", tool: "",
        image: "",
        details: "This was a labyrinth generator and solver. The labyrinth could be on a hexagon or square grid and was created to learn about recursion and fonctional programming."
    }

    
]