const imghash = require('imghash');
const hamming = require('hamming-distance');
const mongoose = require('mongoose')

//mongoose.connect('mongodb+srv://.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })

const Image = require('./image.schema')


const hash1 = imghash.hash('./img/sdh2.jpg');
const hash2 = imghash.hash('./img/sdh.jpg');

//to add 5 or more photos
/* const hash1 = imghash.hash('./img/sdh2.jpg');
  const hash2 = imghash.hash('./img/sdh.jfif');
const hash1 = imghash.hash('./img/sdh2.jpg'); */


const image = new Image()
image.save()

Promise
  .all([hash1, hash2])
  //.hexToBinary([hash1, hash2])
  .then((results) => {
    const dist = hamming(results[0], results[1]);
    console.log(`Distance between images is: ${dist}`);
    if (dist <= 11) {
      console.log('Images are similar');
    } else {
      console.log('Images are NOT similar');
    }
    console.log(hash1)
    console.log(hash2)
  });
