//Use node index.js in the terminal for execute the script.
//Warning: Firefox does not fully support the editor. Please use a chromimum-based web browser such as Chrome, Brave or Edge.
//This script is a basic example of a player's movement. You can load other examples by clicking on "Load example".
const server = "https://api.artifactsmmo.com";
//Your token is automatically set
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImRlc21vbmRjaHVhIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.cMLuvosCVhvK4W2Jg9j_Fe_hdW4bN6Qq6cI__F6Tk4k";
//Put your character name here
const character = "kukuBird";


document.addEventListener("DOMContentLoaded", async function(){

  const charStatus = await getChar();
  console.log(charStatus.data.x,charStatus.data.y);

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values of the input fields
    const x = document.getElementById("variable1").value;
    const y = document.getElementById("variable2").value;

    // You can process the variables here
    console.log("X:", x);
    console.log("Y:", y);
    movement(x,y);

    // Optionally, you can clear the form
    this.reset();
});

  

})

async function getChar(data){

  const options = {
    method: 'GET',
    url: `https://api.artifactsmmo.com/characters/${character}`,
    headers: {Accept: 'application/json'}
  };
  
  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
    
  } catch (error) {
    console.error(error);
  }
}
  
async function movement(movex,movey){

  console.log(movex,movey);
  const options = {
    method: 'POST',
    url: `https://api.artifactsmmo.com/my/${character}/action/move`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImRlc21vbmRjaHVhIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.cMLuvosCVhvK4W2Jg9j_Fe_hdW4bN6Qq6cI__F6Tk4k'
    },
    data: {x: movex, y: movey}
  };
  
  try {
    const { data } = await axios.request(options);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  

}
  

async function fight(){

    const url = server + '/my/' + character +'/action/fight';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },

    };
    
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
}

