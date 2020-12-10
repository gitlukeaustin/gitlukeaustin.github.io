window.onload = function () {

    var url = "http://www.colourlovers.com/api/palettes/random";

    Vue.component('v-card', {
        props:['d'],
        template: `
            <div class="card">  
                <h2> {{ d.title }}, {{ d.year }}</h2>
                <div>
                    {{ d.description}} <br> {{ d.language }}
                    <a v-if="d.code !== null" :href="d.code">source code</a>
                    <a v-if="d.demo !== null" :href="d.demo">playable demo</a>
                </div>
            </div>`
      })

    var app = new Vue({
        el: '#app',
        data: {
            cardView: true,
            projects: [
                {id: 0, title: "Honshu", year: "2018", description: "A traditional tile based card game", language: "Written in C using OpenGL", code:"https://gitlab.com/jonath20e/Honshu", demo:null},
                {id: 1, title: "Biome", year: "2019", description: "A fully 3d action roguelike", language: "Written in C# using Unity", code:"https://gitlab.com/Atchoom/biome", demo:null},
                {id: 2, title: "Card Game", year: "2019", description: "An original web basaed card game", language: "Written in JavaScript using VueJS", code:"", demo:null},
                {id: 3, title: "Snake", year: "2015", description: "The classic snake game", language: "Written in C", code:null, demo:null},
                {id: 4, title: "Sudoku", year: "2016", description: "Sudoku.", language: "Written in Java", code:null, demo:null},
                {id: 5, title: "Labyrinth", year: "2019", description: "A self solving labyrinth created for learning recursion mainly", language: "Written in Ocaml", code:"https://github.com/gitlukeaustin/caml", demo:null},
                {id: 6, title: "GLAS", year: "2016", description: "A sound wavelength viewer ", language: "Written in Java", code:"https://github.com/gitlukeaustin/GLAS", demo:null},

            ],
            appContainer:null,
            viewText: "List View"
        },
        mounted: function() {
            this.appContainer = document.getElementById("cardholder");
        },
        methods: {
            changeColors(){
                /*axios.get(url)
                .then(response => {

                })
                .catch(error => console.log(error));*/
                fetch(url) // Call the fetch function passing the url of the API as a parameter
                .then(function() {
                    // Your code for handling the data you get from the API
                })
                .catch(function() {
                    // This is where you run code if the server returns any errors
                });
            },
            toggleView()
            {
                console.log(this);
                console.log("switching view mode");
                if(this.cardView) {
                    this.appContainer.style.flexFlow = "column nowrap";
                    this.viewText = "Card View";
                }  
                else {
                    this.appContainer.style.flexFlow = "row wrap";
                    this.viewText = "List View";
                } 
                
                this.cardView = !this.cardView;
            }
        }
    });
}