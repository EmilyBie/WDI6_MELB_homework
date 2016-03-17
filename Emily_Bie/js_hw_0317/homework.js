//The Recipe Csard
var recipe = {
  title: 'Cheese cake',
  servings: 10,
  ingredients:['cheese','ice cream','sugar','choclate']
};

console.log('- ' + recipe.title);
console.log('- Servs:'+ recipe.servings);
console.log('- Ingredients:');
for(var index = 0 ;index < recipe.ingredients.length; index++) {
  console.log('- ' + recipe.ingredients[index]);
}

//The Reading List
var readingList = [{
  title:'Jane Eyre',
  author:'Charlotte Bronte',
   alreadyRead: true
 },
 {
  title: 'Hobbit', 
  author:'J.R.R. Tolkien',
  alreadyRead: false
  },
  {
    title:'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    alreadyRead: false
  }];
for(var index = 0; index < readingList.length; index++) {
  if(readingList[index].alreadyRead === true) {
    console.log('You already read ' + readingList[index].title + ' by ' + readingList[index].author);
  } else {
    console.log('You still need to read ' + readingList[index].title + ' by ' + readingList[index].author);
  }
}

//The Movie Database
var movie = {
  title: 'Sherlock Holmes',
  duration: 120,
  stars: [' Robert Downey','Jude Law','Rachel McAdams','Mark Strong']
}

var printOutMovie = function(movie) {
  var stars = movie.stars.join();
  console.log(movie.title + ' lasts for ' + movie.duration + ' minutes. Stars:' + stars+'.');
}

printOutMovie(movie);