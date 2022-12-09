export const movieMock = {
  adult: false,
  backdrop_path: "/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
  belongs_to_collection: {
    id: 256322,
    name: "The Purge Collection",
    poster_path: "/kklRqw1Mp7xTnHm2ifmPNshGB4D.jpg",
    backdrop_path: "/zLx0VxpzJt3E0cb4GodV10Wp0Lt.jpg",
  },
  budget: 18000000,
  genres: [
    { id: 12, name: "Adventure" },
    { id: 53, name: "Thriller" },
    { id: 28, name: "Action" },
    { id: 27, name: "Horror" },
    { id: 37, name: "Western" },
  ],
  homepage: "https://www.theforeverpurge.com",
  id: 602223,
  imdb_id: "tt10327252",
  original_language: "en",
  original_title: "The Forever Purge",
  overview:
    "All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.",
  popularity: 6705.478,
  poster_path: "/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg",
  production_companies: [
    {
      id: 3172,
      logo_path: "/kDedjRZwO8uyFhuHamomOhN6fzG.png",
      name: "Blumhouse Productions",
      origin_country: "US",
    },
    {
      id: 2481,
      logo_path: "/nVEP2IHCDOBOldgDL4SSufitN9.png",
      name: "Platinum Dunes",
      origin_country: "US",
    },
    {
      id: 33,
      logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
      name: "Universal Pictures",
      origin_country: "US",
    },
    {
      id: 10338,
      logo_path: "/el2ap6lvjcEDdbyJoB3oKiYgXu9.png",
      name: "Perfect World Pictures",
      origin_country: "CN",
    },
    {
      id: 138783,
      logo_path: "/dCzNhv0G1Gz4u5piPyJy6n3wYWU.png",
      name: "Man in A Tree",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2021-06-30",
  revenue: 49273105,
  runtime: 103,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
    { english_name: "Spanish", iso_639_1: "es", name: "Español" },
  ],
  status: "Released",
  tagline: "The rules are broken.",
  title: "The Forever Purge",
  video: false,
  vote_average: 7.7,
  vote_count: 338,
};

export const getMovieMock = (id) => ({ ...movieMock, id });

export const getRandomMovies = (movies = 1) =>
  Array(movies)
    .fill(null)
    .map((_v, key) => getMovieMock(key));
