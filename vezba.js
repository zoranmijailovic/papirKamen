const contacts = [
  "Luka:067556747",
  "Zoran:0677472755",
  "Dejan:08742325",
  "Peki:40352556",
];

const para = document.querySelector('p');
const input = document.querySelector('#search');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  let searchName = input.value.toLowerCase();
  
  for(const contact of contacts){
    const splitContact = contact.split(":");
    if(splitContact[0].toLowerCase() === searchName){
      para.textContent = `${splitContact[0]} njegov je broj: ${splitContact[1]}`;
      break;
    };
  }
  if(para.textContent === ""){
    para.textContent = "kontakt nije pronadjen";
  }
});