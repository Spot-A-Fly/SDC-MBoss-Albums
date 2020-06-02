const faker = require('faker');
const fs = require('fs');
const path = require('path');

const prefixes = [
  'Flaming',
  'Black',
  'Talking',
  'Broken',
  'Ashen',
  'Rainbow',
  'Wandering',
  'Lost',
  'Breathing',
  'Rough',
  'Rolling',
  'Thundering',
  'Hipster',
  'Punk',
  'Goth',
  'White',
  'Pale',
  'Lunar',
  'Mystic',
  'Screaming',
  'Sexy',
  'Diabolical',
  'Evil',
  'Thumping',
  'Ascending',
  'Falling',
  'Spinning',
  'Drooling',
  'Secret',
  'Mad',
  'Hot',
  'Veiled',
  'Hidden',
  'Psychic',
  'Nightly',
  'Eerie',
  'Transparent',
  'Wild',
  'Smashing',
  'Chunking',
  'Guns and',
  "Roamin' ",
  'Grummel',
  'Schwifty',
  'Stylish',
  'Creepy',
  'Nerdy',
  'Anti',
  'Panoramic',
  'McShizzle',
  'Pensive',
  'Crushing',
  "Dead Man's",
  'Lords of',
  'Burnt',
  'Wheeled',
  'Living',
  'Azure',
  'Undead',
  'Exploding',
  'Spiralling',
  'Boom-boom',
  'Serious',
  'Stoic',
  'Deep',
  'Somber',
  'Squirming',
  'Vanilla',
  'Screeching',
  'Thrashing',
  'Selective',
  'Swift',
  'Soaring',
  'Mighty',
];

const suffixes = [
  'Flames',
  'Banisters',
  'Skulls',
  'Unicorns',
  'Souls',
  'Corpses',
  'Flannel',
  'Zombies',
  'Lampshades',
  'Scientists',
  'Ghosts',
  'Dude and His Merry Gang of Band Nerds',
  'Hunters',
  'Sirens',
  'Lozenges',
  'Stones',
  'Heads',
  'Hands',
  'Cerulean',
  'Lightning',
  'Blades',
  'Gang',
  'Homeboys',
  'Critics',
  'Emos',
  'Rebels',
  'Pirates',
  'Pumpkins',
  'Roses',
  'Demons',
  'Tractors',
  'Men',
  'Gals',
  'Riders',
  'Ray-Bans',
  'Trenchcoats',
  'Creepers',
  'Gravity',
  'Diamonds',
  'Mirrors',
  'Jefes',
  'Esperantos',
  'Crimson',
  'Wrappers',
  ' José y los gauchos',
  'Heat',
  'Fever',
  'Wave',
  'Spell',
  'Spectacle',
  'Voices',
  'Group',
  'Fliers',
  'Homies',
  'Rum',
  'Wheels',
  'Brits',
  'Machines',
  'Assassination',
  'Flint',
  'Noises',
  'Perspiration',
  'Perpetrator',
  'Betrayed',
  'Wasslers',
  'Whirlpool',
  'Pistols',
  'Boulders',
  'Trinkets',
  'Rag Dolls',
  'Bazookas',
  'Popsicle',
  'Ice Cubes',
  'Banshees',
  'Frost',
  'Darkness',
  'Beat',
  'Freeze',
  'Kittens',
  'Superheroes',
  'Bagel',
  'Flaxseeds',
  'Children',
  'Love',
  'Equinox',
  'Life',
];
// 12 different genres
const genres = [
  'Rock',
  'Metal',
  'Pop',
  'Rap',
  'Hip-Hop',
  'Soul',
  'Country',
  'Classical',
  'Jazz',
  'Big Band',
  'Funk',
  'Disco',
];

const generateBandName = () => {
  let route = Math.floor(Math.random() * 13);
  let randomPre = prefixes[Math.floor(Math.random() * prefixes.length)];
  let randomSuf = suffixes[Math.floor(Math.random() * suffixes.length)];
  let bandName = "";

  if (route === 0) {
    bandName = randomPre + " " + randomSuf;
  }
  if (route === 1) {
    bandName = randomPre + " " + faker.lorem.word();
  }
  if (route === 2) {
    bandName = randomPre + " " + faker.lorem.words();
  }
  if (route === 3) {
    bandName = faker.lorem.word() + " " + randomSuf;
  }
  if (route === 4) {
    bandName = faker.lorem.words() + " " + randomSuf;
  }
  if (route === 5) {
    bandName = "The" + randomPre + " " + randomSuf;
  }
  if (route === 6) {
    bandName = "The" + randomPre + " " + faker.lorem.word();
  }
  if (route === 7) {
    bandName = "The" + randomPre + " " + faker.lorem.words();
  }
  if (route === 8) {
    bandName = "The" + faker.lorem.word() + " " + randomSuf;
  }
  if (route === 9) {
    bandName = "The" + faker.lorem.words() + " " + randomSuf;
  }
  if (route === 10) {
    bandName = faker.name.firstName() + " and the " + randomSuf;
  }
  if (route === 11) {
    bandName = faker.name.firstName() + " and the " + faker.lorem.word();
  }
  if (route === 12) {
    bandName = faker.name.firstName() + " and the " + faker.lorem.words();
  }

  return bandName;
}

const generateAlbumName = () => {
  let route = Math.floor(Math.random() * 10);
  let randomPre = prefixes[Math.floor(Math.random() * prefixes.length)];
  let randomSuf = suffixes[Math.floor(Math.random() * suffixes.length)];
  let albumName = "";

  if (route === 0) {
    albumName = randomPre + " " + randomSuf;
  }
  if (route === 1) {
    albumName = randomPre + " " + faker.lorem.word();
  }
  if (route === 2) {
    albumName = randomPre + " " + faker.lorem.words();
  }
  if (route === 3) {
    albumName = faker.lorem.word() + " " + randomSuf;
  }
  if (route === 4) {
    albumName = faker.lorem.words() + " " + randomSuf;
  }
  if (route === 5) {
    albumName = "The" + randomPre + " " + randomSuf;
  }
  if (route === 6) {
    albumName = "The" + randomPre + " " + faker.lorem.word();
  }
  if (route === 7) {
    albumName = "The" + randomPre + " " + faker.lorem.words();
  }
  if (route === 8) {
    albumName = "The" + faker.lorem.word() + " " + randomSuf;
  }
  if (route === 9) {
    albumName = "The" + faker.lorem.words() + " " + randomSuf;
  }
  if (route === 10) {
    albumName = faker.name.firstName() + " and the " + randomSuf;
  }
  if (route === 11) {
    albumName = faker.name.firstName() + " and the " + faker.lorem.word();
  }
  if (route === 12) {
    albumName = faker.name.firstName() + " and the " + faker.lorem.words();
  }

  return albumName;
}

const generateGenre = () => {
  let genre = genres[Math.floor(Math.random() * 12)];
  return genre;
}

const generateAlbumCover = () => {
  let randomNum = Math.floor(Math.random() * 351);
  let albumCover = `https://source.unsplash.com/collection/893352/360x360/?sig=${randomNum}`;
  return albumCover;
}

const generateAlbumType = () => {
  let release = ['Compilation', 'EP', 'Album', 'Includes'];
  let type = release[Math.floor(Math.random() * 4)];
  return type;
}

const seedDir = path.join(__dirname, 'albums.csv');
const wstream = fs.createWriteStream(seedDir);

wstream.write('bandName,bandId,albumName,genre,albumCover,albumType\n', 'utf8');

function seedAlbums(writer, encoding, callback) {
  let i = 60000000;
  let nextBand = 0;
  let bandId = 1;
  let seedBandName = `${generateBandName()}`
  function write() {
    let ok = true;
    do {
      i -= 1;
      nextBand += 1;

      if (nextBand % 7 === 0) {
        bandId += 1
        seedBandName = `${generateBandName()}`
      }

      let seedData = `${seedBandName},${bandId},${generateAlbumName()},${generateGenre()},${generateAlbumCover()},${generateAlbumType()}\n`

      if (i === 0) {
        writer.write(seedData, encoding, callback);
      } else {
        ok = writer.write(seedData, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

seedAlbums(wstream, 'utf-8', () => {
  wstream.end()
});