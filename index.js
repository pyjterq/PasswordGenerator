const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const button = document.getElementById('generate-button');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

button.addEventListener('click', function(){
    password1.textContent = generatePassword();
    password2.textContent = generatePassword();
   }
)

function generatePassword(){    
    let passwordString = '';
    for (let i = 0; i < 28; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        passwordString += characters[randomIndex];
    } 
    return passwordString;
}