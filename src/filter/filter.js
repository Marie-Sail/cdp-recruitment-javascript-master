import data from "../data.js";

function filter(search) {
  if (typeof search !== "string") {
    return `Parameter must be a string and not "${typeof search}" `;
  } else {
    const letters = search.toLowerCase();
    const newArrayCountries = [];

    data.map((country) => {
      const peopleList = country.people
        .map((person) => {
          const filterAnimals = person.animals.filter((animal) => {
            return animal.name.toLowerCase().includes(letters);
          });
          if (filterAnimals.length > 0) {
            return {
              name: person.name,
              animals: filterAnimals,
            };
          }
        })
        .filter(Boolean);

      if (peopleList.length > 0) {
        newArrayCountries.push({
          name: country.name,
          people: peopleList,
        });
      }
    });

    return newArrayCountries.length > 0
      ? JSON.stringify(newArrayCountries, null, 2)
      : `Sorry, there are no results for "${search}" `;
  }
}


export default filter;
