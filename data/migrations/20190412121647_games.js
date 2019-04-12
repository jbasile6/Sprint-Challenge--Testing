
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', games => {
    games.increments(); //primary key

    games.string('title', 128)
        .notNullable();

    games.string('genre', 128)
        .notNullable();


    games.integer('releaseYear')
        .unsigned() //only positive integers
    });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
};
