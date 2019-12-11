const db = require('../data/dbConfig');

module.exports={
    find,
    findById,
    findSteps,
    add,
    update,
    remove

}

function find(){
    return db("schemes");
}

function findById(id){
    return db("schemes").where("id", id).first();
}

function findSteps(id){
    return db("steps").where("scheme_id", id);
}

function add(scheme){
    return db.insert(scheme,"*").into("schemes");
}

function update(changes, id){
    return db("schemes").where("id", id).update(changes);
}

function remove(id){
    return db("schemes").del().where("id", id);
}