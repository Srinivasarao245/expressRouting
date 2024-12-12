var movies=[
  {
    "id": 1,
    "title": "Inception",
    "releaseyear": 2010,
    "genre": ["Sci-Fi", "Action", "Thriller"],
    "director": "Christopher Nolan",
    "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    "synopsis": "A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to have his criminal record erased if he can successfully perform an inception.",
    "rating": 8.8,
    "reviews": [
      {
        "reviewer": "John Doe",
        "rating": 9,
        "comment": "A mind-bending thriller with incredible visuals. Nolan's direction is top-notch."
      },
      {
        "reviewer": "Jane Smith",
        "rating": 8,
        "comment": "Great concept and execution, though the plot can get a little confusing at times."
      }
    ]
  },
  {
    "id": 2,
    "title": "The Dark Knight",
    "releaseyear": 2008,
    "genre": ["Action", "Crime", "Drama"],
    "director": "Christopher Nolan",
    "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    "synopsis": "Batman faces his greatest enemy, the Joker, who seeks to undermine Gotham City's sense of security and the Batman's moral code.",
    "rating": 9.0,
    "reviews": [
      {
        "reviewer": "Alex Brown",
        "rating": 10,
        "comment": "One of the greatest superhero movies ever made. Heath Ledger's portrayal of the Joker is iconic."
      },
      {
        "reviewer": "Emily White",
        "rating": 9,
        "comment": "A brilliant movie with strong performances and an engaging plot."
      }
    ]
  },
  {
    "id": 3,
    "title": "The Shawshank Redemption",
    "releaseyear": 1994,
    "genre": ["Drama"],
    "director": "Frank Darabont",
    "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    "synopsis": "Two imprisoned men form a deep bond and find a way to escape from Shawshank prison.",
    "rating": 9.3,
    "reviews": [
      {
        "reviewer": "Sarah Lee",
        "rating": 10,
        "comment": "A masterpiece. The storytelling, acting, and emotional depth make this one of the best films ever."
      },
      {
        "reviewer": "Michael Green",
        "rating": 9,
        "comment": "An incredible story about hope and friendship. It’s slow at times, but the payoff is worth it."
      }
    ]
  },
  {
    "id": 4,
    "title": "The Godfather",
    "releaseyear": 1972,
    "genre": ["Crime", "Drama"],
    "director": "Francis Ford Coppola",
    "cast": ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "rating": 9.2,
    "reviews": [
      {
        "reviewer": "Paul Harris",
        "rating": 10,
        "comment": "The Godfather is a legendary film. It’s a perfect mix of drama and crime with memorable performances, especially by Marlon Brando."
      },
      {
        "reviewer": "Jessica Adams",
        "rating": 9,
        "comment": "One of the greatest films of all time. The pacing and storytelling are flawless, but it's a slow burn."
      }
    ]
  },
  {
    "id": 5,
    "title": "Parasite",
    "releaseyear": 2019,
    "genre": ["Thriller", "Drama", "Comedy"],
    "director": "Bong Joon-ho",
    "cast": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    "synopsis": "A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.",
    "rating": 8.6,
    "reviews": [
      {
        "reviewer": "David Kim",
        "rating": 9,
        "comment": "A brilliant social commentary wrapped in a darkly comic thriller. The twists and turns are unexpected and engaging."
      },
      {
        "reviewer": "Grace Lee",
        "rating": 8,
        "comment": "Clever, satirical, and suspenseful. It’s a unique story with an incredible blend of genres."
      }
    ]
  },
  {
    "id": 6,
    "title": "Forrest Gump",
    "releaseyear": 1994,
    "genre": ["Drama", "Romance"],
    "director": "Robert Zemeckis",
    "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise", "Mykelti Williamson"],
    "synopsis": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an extraordinary life story.",
    "rating": 8.8,
    "reviews": [
      {
        "reviewer": "Linda Thomas",
        "rating": 9,
        "comment": "Tom Hanks gives an iconic performance. An emotional rollercoaster that blends humor, tragedy, and history."
      },
      {
        "reviewer": "Gary Miller",
        "rating": 8,
        "comment": "A heartwarming story about life and perseverance. Forrest’s journey is both inspiring and entertaining."
      }
    ]
  },
  {
    "id": 7,
    "title": "The Matrix",
    "releaseyear": 1999,
    "genre": ["Sci-Fi", "Action"],
    "director": "Lana Wachowski, Lilly Wachowski",
    "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    "synopsis": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "rating": 8.7,
    "reviews": [
      {
        "reviewer": "Chris Wright",
        "rating": 10,
        "comment": "A revolutionary sci-fi movie with mind-blowing concepts and unforgettable action scenes."
      },
      {
        "reviewer": "Tina Evans",
        "rating": 9,
        "comment": "Visually stunning and intellectually stimulating. The Matrix redefined the genre."
      }
    ]
  },
  {
    "id": 8,
    "title": "The Lion King",
    "releaseyear": 1994,
    "genre": ["Animation", "Adventure", "Drama"],
    "director": "Roger Allers, Rob Minkoff",
    "cast": ["Matthew Broderick", "James Earl Jones", "Jeremy Irons", "Whoopi Goldberg"],
    "synopsis": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "rating": 8.5,
    "reviews": [
      {
        "reviewer": "Sophie Davis",
        "rating": 9,
        "comment": "A timeless classic. The animation is breathtaking, and the story is filled with emotion."
      },
      {
        "reviewer": "John Miller",
        "rating": 8,
        "comment": "A beautiful story of courage, family, and friendship. The music is unforgettable."
      }
    ]
  },
  {
    "id": 9,
    "title": "Titanic",
    "releaseyear": 1997,
    "genre": ["Drama", "Romance"],
    "director": "James Cameron",
    "cast": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Danny Nucci"],
    "synopsis": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "rating": 7.8,
    "reviews": [
      {
        "reviewer": "Clara Scott",
        "rating": 9,
        "comment": "An emotional rollercoaster with stunning visuals and unforgettable characters."
      },
      {
        "reviewer": "Tom Roberts",
        "rating": 7,
        "comment": "A love story with a great tragedy. The visuals and music elevate the emotional impact."
      }
    ]
  },
  {
    "id": 10,
    "title": "Gladiator",
    "releaseyear": 2000,
    "genre": ["Action", "Drama"],
    "director": "Ridley Scott",
    "cast": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed"],
    "synopsis": "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
    "rating": 8.5,
    "reviews": [
      {
        "reviewer": "David King",
        "rating": 10,
        "comment": "A stunning historical epic. Russell Crowe delivers one of his best performances."
      },
      {
        "reviewer": "Rachel Fox",
        "rating": 8,
        "comment": "A gripping story with fantastic action sequences and a memorable soundtrack."
      }
    ]
  },
  {
    "id": 11,
    "title": "Avatar",
    "releaseyear": 2009,
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "director": "James Cameron",
    "cast": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Michelle Rodriguez"],
    "synopsis": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "rating": 7.8,
    "reviews": [
      {
        "reviewer": "John Carter",
        "rating": 9,
        "comment": "Visually stunning and immersive. A groundbreaking film that redefined cinema technology."
      },
      {
        "reviewer": "Lilly Harper",
        "rating": 8,
        "comment": "While the story isn’t groundbreaking, the visual effects are nothing short of spectacular."
      }
    ]
  },
  {
    "id": 12,
    "title": "The Avengers",
    "releaseyear": 2012,
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "director": "Joss Whedon",
    "cast": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    "synopsis": "Earth's mightiest heroes must come together and learn to fight as a team to stop Loki and his alien army from enslaving humanity.",
    "rating": 8.0,
    "reviews": [
      {
        "reviewer": "Jack Adams",
        "rating": 9,
        "comment": "A fantastic superhero ensemble with plenty of action and humor. The perfect introduction to the MCU."
      },
      {
        "reviewer": "Emma White",
        "rating": 8,
        "comment": "Great action sequences and a fun team dynamic. The plot is simple but effective."
      }
    ]
  },
  {
    "id": 13,
    "title": "Pulp Fiction",
    "releaseyear": 1994,
    "genre": ["Crime", "Drama"],
    "director": "Quentin Tarantino",
    "cast": ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    "synopsis": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "rating": 8.9,
    "reviews": [
      {
        "reviewer": "Hannah Jones",
        "rating": 10,
        "comment": "A revolutionary film with unique storytelling. Tarantino's dialogue and direction are unforgettable."
      },
      {
        "reviewer": "Michael Carter",
        "rating": 9,
        "comment": "A cult classic with memorable characters and incredible dialogue. A true masterpiece."
      }
    ]
  },
  {
    "id": 14,
    "title": "Schindler's List",
    "releaseyear": 1993,
    "genre": ["Biography", "Drama", "History"],
    "director": "Steven Spielberg",
    "cast": ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall"],
    "synopsis": "In Nazi-occupied Poland, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "rating": 9.0,
    "reviews": [
      {
        "reviewer": "David Wilson",
        "rating": 10,
        "comment": "An emotionally devastating film. Spielberg's direction and the performances are exceptional."
      },
      {
        "reviewer": "Sarah Peterson",
        "rating": 9,
        "comment": "A powerful story of survival and redemption, filled with unforgettable moments."
      }
    ]
  },
  {
    "id": 15,
    "title": "The Godfather Part II",
    "releaseyear": 1974,
    "genre": ["Crime", "Drama"],
    "director": "Francis Ford Coppola",
    "cast": ["Al Pacino", "Robert De Niro", "Diane Keaton", "Marlon Brando"],
    "synopsis": "The early life and career of Vito Corleone in the 1920s are depicted, while his son Michael expands and tightens his grip on the family crime syndicate.",
    "rating": 9.0,
    "reviews": [
      {
        "reviewer": "Tom Green",
        "rating": 10,
        "comment": "A worthy sequel to the original, with incredible performances and an emotional depth that rivals the first film."
      },
      {
        "reviewer": "Linda Martin",
        "rating": 9,
        "comment": "A perfect follow-up that explores Michael's transformation into the ruthless Godfather."
      }
    ]
  },
  {
    "id": 16,
    "title": "The Silence of the Lambs",
    "releaseyear": 1991,
    "genre": ["Crime", "Drama", "Thriller"],
    "director": "Jonathan Demme",
    "cast": ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney", "Ted Levine"],
    "synopsis": "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer.",
    "rating": 8.6,
    "reviews": [
      {
        "reviewer": "Ethan Thomas",
        "rating": 9,
        "comment": "An iconic thriller with outstanding performances, especially from Anthony Hopkins."
      },
      {
        "reviewer": "Natalie Hayes",
        "rating": 8,
        "comment": "A chilling psychological thriller with a tense atmosphere and unforgettable characters."
      }
    ]
  },
  {
    "id": 17,
    "title": "Citizen Kane",
    "releaseyear": 1941,
    "genre": ["Drama", "Mystery"],
    "director": "Orson Welles",
    "cast": ["Orson Welles", "Joseph Cotten", "Dorothy Comingore", "Agnes Moorehead"],
    "synopsis": "A reporter attempts to solve the mystery of the last word spoken by a dying newspaper tycoon.",
    "rating": 8.3,
    "reviews": [
      {
        "reviewer": "George Baker",
        "rating": 10,
        "comment": "A groundbreaking film that influenced cinema forever. Welles' direction and storytelling are revolutionary."
      },
      {
        "reviewer": "Maya Scott",
        "rating": 9,
        "comment": "An iconic film that explores power, legacy, and the complexity of human nature."
      }
    ]
  },
  {
    "id": 18,
    "title": "Fight Club",
    "releaseyear": 1999,
    "genre": ["Drama"],
    "director": "David Fincher",
    "cast": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Meat Loaf"],
    "synopsis": "An insomniac office worker forms an underground fight club with a soap salesman, which quickly grows out of control.",
    "rating": 8.8,
    "reviews": [
      {
        "reviewer": "Laura Miller",
        "rating": 9,
        "comment": "A dark, twisted film about consumerism and masculinity with memorable performances from Pitt and Norton."
      },
      {
        "reviewer": "Kevin Cook",
        "rating": 8,
        "comment": "A film that challenges societal norms and keeps you thinking long after it’s over."
      }
    ]
  },
  {
    "id": 19,
    "title": "The Prestige",
    "releaseyear": 2006,
    "genre": ["Drama", "Mystery", "Sci-Fi"],
    "director": "Christopher Nolan",
    "cast": ["Christian Bale", "Hugh Jackman", "Scarlett Johansson", "Michael Caine"],
    "synopsis": "Two magicians engage in a bitter rivalry, with each trying to outwit the other in creating the ultimate stage illusion.",
    "rating": 8.5,
    "reviews": [
      {
        "reviewer": "David Evans",
        "rating": 9,
        "comment": "An intelligent thriller with impressive twists and amazing performances."
      },
      {
        "reviewer": "Anna Lee",
        "rating": 8,
        "comment": "A captivating story that keeps you guessing until the end. Nolan's direction is excellent."
      }
    ]
  },
  {
    "id": 20,
    "title": "The Departed",
    "releaseyear": 2006,
    "genre": ["Crime", "Drama", "Thriller"],
    "director": "Martin Scorsese",
    "cast": ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
    "synopsis": "An undercover cop and a mole in the police force try to identify each other while infiltrating an Irish gang in Boston.",
    "rating": 8.5,
    "reviews": [
      {
        "reviewer": "James Allen",
        "rating": 9,
        "comment": "A brilliantly crafted crime thriller with fantastic performances, especially by DiCaprio and Nicholson."
      },
      {
        "reviewer": "Rachel Young",
        "rating": 8,
        "comment": "A tense, gripping film that explores deception and loyalty with an incredible cast."
      }
    ]
  }
];
module.exports=movies;