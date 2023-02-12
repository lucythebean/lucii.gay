const genshin = require('genshin-db')

function parseJSON(input){
    try {
        if (input)
            throw new ParseFailedException();
    }
    catch (ParseFailedException){
        console.log("parseJSON failed")
        return(false)
    }
}

function results(request){
    if (Object.keys(request).length < 1){
        console.log("results found no values")
        return({Err: "Search returned no results."})
    } else {
        console.log("results returned something")
        return(request)
    }
}


export default function results(req, res){
    if (parseJSON(JSON.parse(req.body))){
        const {folder, query} = JSON.parse(req.body)
        res.status(200).json(genshin.searchFolder(folder,query))
    } else{
        res.status(500).json({Err: "Invalid search terms! One of your inputs may have been blank."})
        console.log("error, blank.")
    }
}