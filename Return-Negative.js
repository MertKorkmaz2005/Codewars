function makeNegative(num) {
    // Controleer of het nummer al negatief is
    if (num >= 0) {
        // Als het nummer niet negatief is, maak het dan negatief
        return -num;
    } else {
        // Als het nummer al negatief is, retourneer het zoals het is
        return num;
    }
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(makeNegative(42), -42);
  });
});
