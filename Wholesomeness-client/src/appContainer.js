class AppContainer {
    static activities = []
    categories = []
    url = "http://localhost:3000"
    routinePractice = {}

    bindEventListeners() {
        const btn = document.getElementById('createRoutinePractice');
        btn.addEventListener('click', this.getRandomActivities)
    }

    getRandomActivities() {
        debugger
        let randomActivities = [];
        for (let i = 0; i < 4; i++) {
            debugger
            randomActivities.push(this.activities[Math.floor(Math.random()*this.activities.length)])
        };
        return randomActivities;
    }

    getActivities() {
        // fetch reqeust to activities
        console.log("hello");
        fetch(this.url + '/activities')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // render activities
        .catch(err => alert(err));
    }

    renderActivities() {

        //create DOM nodes and insert into DOM

    }

}