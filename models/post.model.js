
const mongoose = require("mongoose")

const postSchema = ({
    title: String,
    price: Number,
    category: String,
    rating: Number,
    numVotes: String,
    image: String,
    description : String,
    id : Number
})


const PostModel = mongoose.model("post", postSchema)

module.exports = {
    PostModel
}