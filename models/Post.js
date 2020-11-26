const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [{
        body: String,
        username: String,
        createdAt: String
    }],
    likes: [{
        username: String,
        createdAt: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    Date: {
        type: Schema.Types.ObjectId,
        ref: 'date'
    }
});

module.exports = model('Post', postSchema);