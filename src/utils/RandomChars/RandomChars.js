export let chars;

export default function RandomChars(){
  chars=[]
  const defaultChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", '"', "'", ")", "_", "+", "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "[", "]", "/", "{", "}", "|", ";", ":","+", "\\"];
  for (let i= 0; i<10; i++){
    chars.push(defaultChars[Math.floor(Math.random()*defaultChars.length)])
  }
}