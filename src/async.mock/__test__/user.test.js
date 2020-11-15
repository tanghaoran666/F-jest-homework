import { register } from "../user";
import { verifyUsername, verifyPassword} from '../verify';

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    verifyPassword.mockReturnValue(true);
    verifyUsername.mockReturnValue(true);
    const result = register('username', 'password');
    expect(result).resolves.toEqual({name: "thr"});
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    verifyPassword.mockReturnValue(false);
    const result = register('username', 'password');
    expect(result).rejects.toEqual(new Error("wrong username or password"))
  });
});
