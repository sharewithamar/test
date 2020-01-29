const fetch = require('node-fetch');
const swapi = require('./script2');

//swapi.getPeople(fetch).then(data => console.log(data));

it('calls swapi to get people', done => {
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).to.equal(87);
    done();
  });
});

it('calls swapi to get people with a promise', () => {
  swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).to.equal(87);
  });
});
