const genshin = require('genshin-db')

export default function results(req, res){
    const {folder, query} = JSON.parse(req.body)
    res.status(200).json(genshin.searchFolder(folder, query))
}