import { createSelector } from "reselect";

export const resolvedBugs = (state) =>
  createSelector(
    (state) => state.bugs,
    (bugs) => bugs.filter((bug) => bug.resolved)
  );
