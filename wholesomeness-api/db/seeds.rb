# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Activity.destroy_all

psych = Category.create(name: "psychological")
physical = Category.create(name: "physical")
spiritual = Category.create(name: "spiritual")

Activity.create(name:"swimming", category: physical)
Activity.create(name:"running", category: physical)
Activity.create(name:"hiking", category: physical)
Activity.create(name:"jogging", category: physical)
Activity.create(name:"reading", category: spiritual)
Activity.create(name:"mediating", category: psych)