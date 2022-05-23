use events
db.getCollection("events").aggregate([
    {
        $match: {id:13.0}
    },
    {
        $group: {
            _id: "$id", 
            sum: {$sum: "$quantity"}
        }
    }
]);