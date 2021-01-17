const handleProfileGet = (req,res, db) => {
    // params mean the :id part
    const { id } = req.params;
    let isFound = false;
    db.select('*').from('users').where({id}).then(user => {
        if (user.length) {
            res.json(user[0]);
        } else {
            res.status(400).json('error getting user');
        }
    })
}

module.exports = {
    handleProfileGet
}