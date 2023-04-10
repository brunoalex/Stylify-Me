import { jest, expect, describe, beforeEach, test } from "@jest/globals";
import { deleteFile, makeFilename } from "../utils.mjs";

describe("utils", () => {
  beforeEach(() => {
    jest.mock("fs");
  });

  test.each([
    ["https://guarded-castle-75827.herokuapp.com/", "guarded-castle-75827.herokuapp.com/"],
    ["https://guarded-castle-75827.herokuapp.com/", "https://guarded-castle-75827.herokuapp.com/"],
    ["https://guarded-castle-75827.herokuapp.com/m", "https://guarded-castle-75827.herokuapp.com/"],
    ["https://google.com", "google.com"],
    [`http://localhost:4000`, `localhost_4000`],
  ])("accepts %s", (url, result) => {
    expect.assertions(1);
    expect(makeFilename(url)).toBe(result);
  });
});
