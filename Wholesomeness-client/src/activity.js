class Activity {
    constructor(name, category){
        this.name = name;
        this.category = category;
        AppContainer.activities.push(this)

    }

    static byCategory(categoryName) {
        return AppContainer.activities.filter(activity => activity.category.name === categoryName)
    }
}