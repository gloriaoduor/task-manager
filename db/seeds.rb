# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# db/seeds.rb

Task.create(
  title: "Complete test",
  description: "The coding test and psychometry test",
  status: "Pending",
  creation_date: Date.today
)

Task.create(
  title: "Prepare presentation",
  description: "Create slides and practice for the client meeting",
  status: "Complete",
  creation_date: Date.today
)

Task.create(
  title: "Review project proposal",
  description: "Analyze the client's requirements and provide feedback",
  status: "Pending",
  creation_date: Date.today
)

Task.create(
  title: "Send project estimates",
  description: "Email cost estimates to the client",
  status: "Complete",
  creation_date: Date.today
)

Task.create(
  title: "Meet with the team",
  description: "Discuss project updates and assign tasks",
  status: "Pending",
  creation_date: Date.today
)
