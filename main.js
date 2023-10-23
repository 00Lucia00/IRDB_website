// fetch API
fetch("https://localhost:7270/api/Movie/")
  .then((response) => response.json()) //tar ut den rena datan
  .then((data) => console.log(data));
