import { searchFolder } from "genshin-db";
import { keyify } from "public/parse";

export default function results(req, res) {
  const { folder, query } = JSON.parse(req.body);
  var searchRes = searchFolder(folder, query, {
    matchCategories: true,
  });
  let paths = keyify(searchRes);
  res.status(200).json({ genshin: searchRes, paths: paths });
}
