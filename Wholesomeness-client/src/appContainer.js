class AppContainer {
    static activities = []
    categories = []
    url = "http://localhost:3000"
    routinePractice = {}

    bindEventListeners() {
        const btn = document.getElementById('createRoutinePractice');
        btn.addEventListener('click', this.getRandomActivities)
    }

    getRoutinePractice() {
        this.getRandomActivities
    }

    getRandomActivities() {
        let randomActivities = [];
        for (let i = 0; i < 4; i++) {
            randomActivities.push(AppContainer.activities[Math.floor(Math.random()*AppContainer.activities.length)])
        };
        let daily = new routinePractice(randomActivities) 
    }

    renderRoutinePractice() {

    }

    getActivities() {
        // fetch reqeust to activities
        console.log("hello");
        fetch(this.url + '/activities')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(activity => {
                new Activity(activity.name, activity.category)
            });
            this.renderActivities();
        })
        // render activities
        .catch(err => alert(err));
    }

    renderActivities() {
        const psychSelect = document.getElementById('psychological')
        const physicalSelect = document.getElementById('physical')
        const spiritualSelect = document.getElementById('spiritual')
        AppContainer.activities.forEach(activity => {
            const option = document.createElement('option');
            option.innerText = activity.name;
            switch(activity.category.name) {
                case "psychological":
                    psychSelect.appendChild(option);
                 break;
                case "spiritual":
                    spiritualSelect.appendChild(option);
                 break;
                case "physical":
                    physicalSelect.appendChild(option);
                 break;
            default:
            }
        })
    }

}