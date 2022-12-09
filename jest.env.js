const { localStorage } = require("./src/tests/__mocks__/local-storage.mock");

global.localStorage = localStorage;

beforeEach(() => {
  global.localStorage.clear();

  window.location = {
    assign: jest.fn(),
    href: null,
  };
});
