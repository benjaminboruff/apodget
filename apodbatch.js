// retrieve JSON data from NASA APOD database
const https = require('https');

var apodRequest = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

https.get(apodRequest, (res) => {
    var body = '';
    // console.log("Got response: ", res.statusCode);
    // console.log("Headers: ", res.headers);
    
        // consume response body
        res.on('data', (d) => {
            //process.stdout.write(d);
            body += d;
        });
        
        res.on('end', () => {
            var parsed = JSON.parse(body);
            console.log(JSON.stringify(parsed));
        });
        
        res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});

