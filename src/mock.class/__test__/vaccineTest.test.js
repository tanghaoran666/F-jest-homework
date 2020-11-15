import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  const theMockClass = jest.fn().mockImplementation(() => {
    const returnValue = {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies
    };
    return returnValue;
  });
  return theMockClass;
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new VaccineTest();

    vaccineTest.inject();

    expect(mockAcceptInjection).toHaveBeenCalledWith(expect.any(Covid19Vaccine))
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    const vaccineTest = new VaccineTest();
    mockGetHasAntibodies.mockImplementation(() =>  true);
    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    const vaccineTest = new VaccineTest();
    mockGetHasAntibodies.mockImplementation(() =>  false);
    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
  });
});
