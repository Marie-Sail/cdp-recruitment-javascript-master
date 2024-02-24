import filter from "./filter/filter.js";

test("filter function exists", () => {
  expect(typeof filter).toBe("function");
});

test("Parameter isn't a number", () => {
  expect(filter(42)).toBe('Parameter must be a string and not "number" ');
});
test("Parameter isn't undefined", () => {
  expect(filter(undefined)).toBe(
    'Parameter must be a string and not "undefined" '
  );
});

test("Parameter isn't a object", () => {
  expect(filter(null)).toBe('Parameter must be a string and not "object" ');
});

test("Empty search string", () => {
  expect(filter("")).toBe('Sorry, there are no results for "" ');
});

test("String does not match", () => {
  expect(filter("rgtp")).toBe('Sorry, there are no results for "rgtp" ');
});

test("The name of the animal includes the letters ry", () => {
  const result = filter("ry");
  expect(result).toBe(Array);
  result.forEach((contry) => {
    expect(contry).toBe(Object);
    contry.people.forEach((persone) => {
      expect(persone).toBe(Object);
      persone.animals.forEach((animal) => {
        expect(animal).toBe(Object);
        expect(animal.name.toLowerCase()).toContain("ry");
      });
    });
  });
});
