import data from "../data.js";

function count() {
  const animalsCount = [];

  data.map((country) => {
    const peopleList = country.people.map((person) => {
      const filterAnimals = person.animals.map((animal) => {
        return animal.name;
      });

      return {
        name:`${person.name} [${person.animals.length}]` ,
        animals: filterAnimals,
      };
    });
  
    return animalsCount.push({
      name: `${country.name} [${country.people.length}]` ,
      people: peopleList,
    });
  });

  return JSON.stringify(animalsCount, null, 2);
}


export default count;
