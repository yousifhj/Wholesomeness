class Activity {
    constructor(name, category){
        this.name = name;
        this.category = category;
        AppContainer.activities.push(this)

    }
}