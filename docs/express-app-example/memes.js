function getMemes(){
    return new Promise ((resolve, reject) => {
        const request = require('request')
        const url = 'https://api.imgflip.com/get_memes'
        //body object gets filled with API call\
            request(url, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    let memes = (JSON.parse(body)).data.memes
                    memes = shuffleArray(memes); //shuffle the memes.
                    
                    let counter = 0;
                    let cache = [];
        
                    memes.forEach((meme) => {
                        if (counter < 10) {
                            // { id: '181913649',
                            //   name: 'Drake Hotline Bling',
                            //   url: 'https://i.imgflip.com/30b1gx.jpg',
                            //   width: 1200,
                            //   height: 1200,
                            //   box_count: 2 }
                            cache.push(meme)
                            counter++;
                        }
                    })
                    console.log(cache)
                    if (counter >= 10) {
                        //console.log(cache)
                        resolve(cache)
                        console.log("Done.")
                    }
                }
            }) 
        
        })
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//getMemes().then((stuff) => console.log(stuff))

//getMemes()

module.exports = {
    getMemes
}