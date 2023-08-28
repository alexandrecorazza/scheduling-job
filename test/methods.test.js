import { filterJobs, sortJobs } from "../src/methods";
import { jobs, windowStartDate, windowEndDate } from "../src/jobs";

describe("filterJobs", () => {
  it("should guarantee any job isn't out of execution window", () => {

    for (const job of jobs) {
      const deadLineTime = job.Deadline.getTime();
      const windowStartTime = windowStartDate.getTime();
      const windowEndTime = windowEndDate.getTime();

      expect(deadLineTime).toBeGreaterThanOrEqual(windowStartTime);
      expect(deadLineTime).toBeLessThanOrEqual(windowEndTime);
    }
  })

  it("should filter jobs", () => {
    const resultFilterJobs = filterJobs(jobs);
    const filteredJobs = jobs.filter(job => job.Deadline >= windowStartDate && job.Deadline <= windowEndDate);

    expect(filteredJobs).toEqual(resultFilterJobs);
  })
});

describe("sortJobs", () => {
  it("should sort jobs", () => {
    const resultSortJobs = sortJobs(jobs)
    const sortedJobs = [...jobs];

    sortedJobs.sort((a, b) => a.Deadline - b.Deadline);

    expect(sortedJobs).toEqual(resultSortJobs);
  })
})