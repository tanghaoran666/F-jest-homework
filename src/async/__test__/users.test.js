jest.mock("axios")
import axios from '../../__mocks__/axios';
import getUsers from '../users';

describe("users", () => {
  test("should get users data with mock axios get", () => {
    // TODO 13: add async test with manual mock
    getUsers();
    expect(axios.get).toHaveReturnedWith({name:"thr"})
  });
});
