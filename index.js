window.onload = function () {

    var url = "http://www.colourlovers.com/api/palettes/random";

    var app = new Vue({
        el: '#app',
        data: {
            cardView: true
        },
        mounted: {},
        methods: {
            changeColors(){
                axios.get(url)
                .then(response => {

                })
                .catch(error => console.log(error));
            },
            toggleView()
            {
                console.log("switching view mode");
                this.cardView = !cardView;
            }
        }
    });
}