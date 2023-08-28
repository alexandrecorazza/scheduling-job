import { groupJobs, generateJobList } from "../src/index";
import { sortJobs } from "../src/methods.js"

describe("groupJobs", () => {
  it("should group jobs correctly within the time limit", () => {
    const mockJobs = [
      { ID: 1, "Estimated time": 2 },
      { ID: 2, "Estimated time": 3 }
    ];
    const jobTimeRemaining = { value: 8 };
    const tempArray = [];
  
    groupJobs(mockJobs[0], 0, tempArray, jobTimeRemaining);
    groupJobs(mockJobs[1], 1, tempArray, jobTimeRemaining);
  
    expect(tempArray).toEqual([1, 2]);
  });
});

describe("generateJobList", () => {
  it("should return the final job list", () => {
    const mockJobs = [
      {
        "ID": 1,
        "Description": "Importação de arquivos de fundos",
        "Deadline": new Date("2019-11-10 10:00:00"),
        "Estimated time": 2,
      },
      {
        "ID": 2,
        "Description": "Importação de dados da Base Legada",
        "Deadline": new Date("2019-11-11 12:00:00"),
        "Estimated time": 4,
      },
      {
        "ID": 3,
        "Description": "Importação de dados de integração",
        "Deadline": new Date("2019-11-11 08:00:00"),
        "Estimated time": 6,
      },
    ]
    const sortedJobs = sortJobs(mockJobs);

    const result = generateJobList(sortedJobs);
    expect(result).toEqual([[1, 3], [2]]);
  })
})