exports.seed = function(knex, Promise) {
  return knex("style")
    .del()
    .then(function() {
      return knex("style").insert([
        {
          id: 1,
          style: "Systema",
          video: "https://www.youtube.com/embed/vRzdZoEqrp4?rel=0",
          summary:
            "Systema is a military martial arts system that was developed from Cossack fighting to be used by the KGB and counter terrorism groups of Russian special forces (i.e. Spetsnaz). It concentrates on things such as self-protection (i.e. against knife, club or gun), grappling, and weapons training as well as personal wellness. Systema students train for real-life combat situations and the potential to defend against multiple armed opponents."
        },
        {
          id: 2,
          style: "Judo",
          video: "https://www.youtube.com/embed/xIP2uA3igQo",
          summary:
            "Judo is a Japanese martial arts focused on grappling, joint locks and throws. Punches and kicks are generally not practiced at Judo schools. Judo was created in Japan in the 1880s and grew out of the even older Japanese martial arts of Jujutsu. According to the International Judo Federation, the history of Judo is the history of the shift from a martial art to a modern sport. Moreover, Judo is consider a parent to newer martial arts such as Sambo and Brazilian Jiu-Jitsu."
        },
        {
          id: 3,
          style: "Wing-Chun",
          video: "https://www.youtube.com/embed/-d-MyALZUcY",
          summary:
            "Wing Chun is a Chinese martial arts focused on strikes, grappling and weapons training. This popular martial arts has become even more well-known due to the success of the Ip Man movie series (where Donnie Yen played a Wing Chun Grandmaster). Wing Chun's specialty is close combat. It uses simultaneous attack and defense with footwork that drives in towards the body of the opponent. Force and strength are dealt with through positioning, structure, and timing rather than with more brute force."
        },
        {
          id: 4,
          style: "Eskrima",
          video: "https://www.youtube.com/embed/hYVkVA_oeIU",
          summary:
            "Eskrima (or Escrima) is a Filipino martial arts that focuses on the use of sticks, bladed and impact/blunt weapons, improvised weapons, and hand-to-hand (empty hand) techniques. Eskrima is also known as Kali and Arnis. Eskrima belongs in the same category as other stick-based martial arts styles such as Bataireacht, Canne de Combat, Tahtib, etc."
        },
        {
          id: 5,
          style: "Ninjutsu",
          video: "https://www.youtube.com/embed/0tNUo0AwkjU",
          summary:
            "Ninjutsu (or more traditionally known as Ninpō) is a Japanese martial arts style focusing on the use of stealth and deception in order to defend oneself or fulfill an objective. The martial arts of Ninjutsu is commonly associated with the Japanese Shinobi (or Ninjas). This martial arts style utilizes a variety of martial arts skills such as takedowns, the use of ninjutsu weapons (i.e. Shuriken, Kunai, Shuko and Kyoketsu-Shoge) and stealth (for purposes of defense, information gathering, and other tasks)."
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE style_id_seq RESTART WITH 6;");
    });
};
