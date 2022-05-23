use events
db.getCollection("events").aggregate([
    {
        $match: {id:13.0}
    },
    {
        $group: {
            _id: {$dayOfMonth: "$dateOfEvent"}, 
            sum: {$sum: "$quantity"}
        }
    }
]);