function firstWord(s) {
	str=""
  for (let i=0;i<s.length;i++){
if(str[i]===" "){
	return str
}
	  str+=s[i]
	  
  }
	return str
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
