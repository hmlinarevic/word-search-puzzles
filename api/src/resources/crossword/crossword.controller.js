import createCrosswordLevel from "../../modules/crossword/index.js";

export const getLevel = (req, res) => {
  res.send({ level: createCrosswordLevel(req.params.level) });
};
