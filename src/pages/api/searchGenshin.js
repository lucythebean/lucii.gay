const genshin = require("genshin-db");
import { getPath, getKeys, keyify } from "public/parse";

export default function results(req, res) {
  const { folder, query } = JSON.parse(req.body);
  var searchRes = genshin.searchFolder(folder, query);
  let headers = Object.keys(searchRes);
  let paths = keyify(searchRes);
  res
    .status(200)
    .json({ genshin: genshin.searchFolder(folder, query), paths: paths });
}
