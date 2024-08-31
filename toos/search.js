const http = require("https");
const searchTerm = "Gucci";
const options = {
  method: "GET",
  hostname: "fragrancefinder-api.p.rapidapi.com",
  port: null,
  path: `/searchParfumes?perPage=3&page=1&keyword=${searchTerm}`,
  headers: {
    "x-rapidapi-key": "88c207fa04msh9ea402a879dd229p196e58jsn0fdac5525e50",
    "x-rapidapi-host": "fragrancefinder-api.p.rapidapi.com",
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
  res.on("end", function () {
    const body = Buffer.concat(chunks);
    const data = body.toString();
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    const notesArray = parsedData.hits[0].notes;
    const mainAccords = parsedData.hits[0].main_accords;

    for (let i = 0; i < notesArray.length; i++) {
      console.log(notesArray[i]);
    }
    for (let i = 0; i < mainAccords.length; i++) {
      console.log(mainAccords[i]);
    }
  });
});

req.end();
