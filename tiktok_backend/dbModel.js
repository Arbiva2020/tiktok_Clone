import mongoose from "mongoose";

// const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
url: String,
channel: String,
song: String,
likes: Number, 
messages: Number, 
description: String,
shares: Number,
});

//collection inside the database
//inside a collection we can have several documents
//document -> json
//the arr data is a collection. each video is a document


export default mongoose.model('tiktokVideos', tiktokSchema);
// module.exports = mongoose.model("tiktokVideos", tiktokSchema);