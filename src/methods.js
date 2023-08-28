import { windowStartDate, windowEndDate } from "./jobs.js";

export const filterJobs = (jobs) => {
    return jobs.filter(job => job.Deadline >= windowStartDate && job.Deadline <= windowEndDate)
}

export const sortJobs = (jobs) => {
    return jobs.sort((a, b) => a.Deadline - b.Deadline );
}