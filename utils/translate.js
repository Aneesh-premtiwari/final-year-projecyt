export const translate = async (text, languageFrom, languageTo) => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://yhpapskb58.execute-api.us-east-1.amazonaws.com/v1/translate",
    params: { text: text, to: languageTo, from: languageFrom },
    // headers: {
    //   "X-RapidAPI-Key": "7fb15711b0mshdcf75f9ebce235ep112814jsne23cb9110ba4",
    //   "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com",
    // },
  };
  console.log("options=", options);
  const response = await axios.request(options).catch(function (error) {
    console.error(error);
    console.log("error=", error);
  });
  // const response = {
  //   status: 200,
  //   data: {from:"en",
  //   original_text:"Hello, world!!",
  //   status:200,
  //   to:"es",
  //   translated_characters:14,
  //   translated_text:{
  //     es:"¡¡Hola Mundo!!"
  //   }
  // },
  // };

  if (response?.status !== 200) {
    console.log(response);
    throw new Error(
      "Translate call failed. Response status: " + response.status
    );
  }
  console.log("final res=", response.data);
  return response.data;
};