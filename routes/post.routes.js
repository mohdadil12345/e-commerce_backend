


const express = require("express")
const { PostModel } = require("../models/post.model")


const postRouter = express.Router()


// post
postRouter.post("/add", async (req, res) => {


    try {

        const data = new PostModel(req.body )
        await data.save()
        res.status(200).json({ msg: "posts added" })

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})










//  get top 

postRouter.get("/",  async (req, res) => {



    try {

        const data = await PostModel.find()

        res.status(200).json(data )

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})
















module.exports = {
    postRouter
}