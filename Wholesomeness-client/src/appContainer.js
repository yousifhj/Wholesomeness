class AppContainer {
    activities = []
    categories = []
    url = "http://localhost:3000"
    routinePractice = {}

    getActivities() {
        // fetch reqeust to activities
        console.log("hello")
        fetch(this.url + '/activities')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // render activities
        .catch(err => alert(err))
    }

    renderActivities() {

        //create DOM nodes and insert into DOM

    }

}