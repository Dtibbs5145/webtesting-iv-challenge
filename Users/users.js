const db = require('../data/dbConfig');

module.exports = {
    getAll,
    getById,
    insert,
    remove
};

async function getAll() {
    return await db('users');
}

async function getById(id) {
    return await db('users')
        .where({ id })
        .first();
}

async function insert(user) {
    return await db('users')
        .insert(user);
}

async function remove(id) {
    return await db('users')
        .del()
        .where({ id });
}