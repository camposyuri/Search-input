import React, { useState, useEffect } from "react";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Função para pegar o valor do input digitado
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  // Para filtrar o array people.
  // toLocaleLowerCase() retorna um valor de string convertido em lower case.
  // includes() verifica se a array possui o valor e retorna true ou false.
  useEffect(() => {
    const results = people.filter((person) =>
      person.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
