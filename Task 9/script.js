/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    let expensive = this.budget >= 1e8 ? true : false;
    return expensive;
  }
}

let avatar = new Movie("Avatar", "James Cameron", 2.5e8);
let simpsonsMovie = new Movie("The Simpsons Movie", "David Silverman", 7.5e7);

console.log(`avatar.wasExpensive() = `, avatar.wasExpensive());
console.log(`simpsonsMovie.wasExpensive() = `, simpsonsMovie.wasExpensive());
