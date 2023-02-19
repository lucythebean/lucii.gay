const genshin = require('genshin-db')
import { getPath }  from 'public/parse'

export default function results(req, res){
    const {folder, query} = JSON.parse(req.body)
    var searchRes = genshin.searchFolder(folder, query)
      let headers = Object.keys(searchRes)
      let output = {}
      for (var key in headers){
        let paths = getPath(searchRes[headers[key]]);
        console.log("searhres" + key + "header: "+ headers[key]);
        output[headers[key]] = paths
      }
      //console.log("output: "+ JSON.stringify(output))
    res.status(200).json({"genshin":genshin.searchFolder(folder,query),"paths":output})
}