import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "videesh";
const yourPassword = "rabbit";
const yourAPIKey = "69e41c7e-087a-4be6-9f26-94a5b293e879";
const yourBearerToken = "68ec18fd-e72f-4f62-a064-b598aa8204cd";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  try{
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs" , { content : JSON.stringify(result.data) });
  } catch(error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", (req, res) => {
  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/all?page=2', {
      auth: {
        username: 'videesh',
        password: 'rabbit'
      },
    });
    res.render("index.ejs" , { content : JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", (req, res) => {
  const response = await axios.get('https://secrets-api.appbrewery.com/filter?score=5' , {
  params: {
    apiKey: "abc123xyz",
    },
  });

});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
