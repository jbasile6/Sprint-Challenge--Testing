
exports.seed = function(knex, Promise) {
      return knex('games').insert([
        {id: 1, title: 'Super Smash Bros.', genre: 'Fighting', releaseYear: 1999},
        {id: 2, title: 'The Legend of Zelda: Ocarina of Time', genre: 'Action-Adventure', releaseYear: 1998},
        {id: 3, title: 'Donkey Kong 64', genre: 'Action-Adventure', releaseYear: 1999}
      ]);
};
