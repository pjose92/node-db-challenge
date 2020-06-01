exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("project").insert([
        {
          name: "Build a Data Model and a RESTful API that stores data into a Relational Database",
          description:
            "Build a api that will store projects, tasks and resources",
          completed: false,
        },
        {
          name: "Create a back-end API for a car dealership",
          description: "This project is for a private client.",
          completed: false,
        },
        {
          name: "Design 3 different prototype projects",
          description:
            "Prototypes to be presented to potential clients for a new websites.",
          completed: false,
        },
      ]);
    });
};