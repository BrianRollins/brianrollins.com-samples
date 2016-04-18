function buildAList(target,source) {
  source.sort(); //Let's sort them, just to look nice.
  $(target).append("<ul></ul>");
  for (var k=0; k<source.length; k++) {
    $(target + " > ul").append("<li>"+source[k]+"</li>");
  }
}

var movies = [
  { "title":"Star Wars",
    "released": "1977",
    "genres": ["Sci-Fi", "Fantasy", "Action"] },
  { "title":"Star Trek: The Motion Picture",
    "released": "1979",
    "genres": ["Sci-Fi"] },
  { "title":"Alien",
    "released": "1979",
    "genres": ["Sci-Fi", "Horror"] },
  { "title":"Aliens",
    "released": "1986",
    "genres": ["Sci-Fi", "Horror", "Action"] },
  { "title":"Labyrinth",
    "released": "1986",
    "genres": ["Fantasy", "Musical"] },
  { "title":"The Matrix",
    "released": "1999",
    "genres": ["Sci-Fi", "Action", "Martial Arts"] },
  { "title":"The Maltese Falcon",
    "released": "1941",
    "genres": ["Mystery", "Noir"] }
];



//Release Years
//Create an array of all the release years.
var releaseYears = [];
for (var i=0; i<movies.length; i++){
  if ( $.inArray(movies[i].released, releaseYears) === -1 ) {
    releaseYears.push( movies[i].released );
  }
}
//Display that list of years.
buildAList("#yearList", releaseYears);

//Movie genres
//Create an array of all the genres in the data.
//We'll need nested loops for this.
var genres = [];
for (var i=0; i<movies.length; i++){
  for (var j=0; j<movies[i].genres.length; j++) {
    if ( $.inArray(movies[i].genres[j], genres) === -1 ) {
      genres.push( movies[i].genres[j] );
    }
  }
}

//Display that list of genres.
buildAList("#genreList", genres);
