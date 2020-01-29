const googleDatabase = [
  'cats.com',
  'souprecieps.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com',
  'myfavoritecats2.com'
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => website.includes(searchInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

//console.log(googleSearch('cat'));

module.exports = googleSearch;
