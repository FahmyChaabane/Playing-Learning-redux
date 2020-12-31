const logger = (store) => (next) => (action) => {
  console.log("middlewar for logging right here");
  next(action);
};

export default logger;
