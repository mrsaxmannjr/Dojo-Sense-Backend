exports.seed = function(knex, Promise) {
  return knex("dojo")
    .del()
    .then(function() {
      return knex("dojo").insert([
        {
          id: 1,
          dojo: "Scornavacco Martial Arts Academy",
          style: "Systema",
          url: "http://www.systemacolorado.com/",
          latitude: 40.195976,
          longitude: -105.122658
        },
        {
          id: 2,
          dojo: "Gracie Judo Club",
          style: "Judo",
          url: "http://graciejudoclub.com/",
          latitude: 39.594337,
          longitude: -105.089287
        },
        {
          id: 3,
          dojo: "Denver Wing Chun",
          style: "Wing-Chun",
          url: "http://www.denverwingchun.com/",
          latitude: 39.677822,
          longitude: -104.921636
        },
        {
          id: 4,
          dojo: "Colorado Chapter of Modern Arnis",
          style: "Eskrima",
          url: "http://www.cwarnis.com/",
          latitude: 40.406461,
          longitude: -104.706629
        },
        {
          id: 5,
          dojo: "Colorado Ninja Dojo",
          style: "Ninjutsu",
          url: "http://www.coloradoninjutsu.com/",
          latitude: 39.608913,
          longitude: -105.108041
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE dojo_id_seq RESTART WITH 6;");
    });
};
