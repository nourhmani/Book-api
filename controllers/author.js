import Author from "../models/Author.js";

export const fetchAuthors = async (req, res) => {   
    try {
      const authors = await Author.find();
      res.status(200).json({model: authors, message: "success"});
    } catch (error) {
      res
        .status(400)
        .json({ error: error.message, message: "failed : authors not found" });
      console.log(error);
    }
}

export const createAuthor = async (req, res) => {
    try {
      const author = new Author(req.body);
      await author.save();
      res.status(201).json({model: author, message: "success"});    
    } catch (error) {

      res
        .status(400)
        .json({ error: error.message, message: "failed : author not created" });
      console.log(error);

    }
    
}


export const getAuthorById = async (req, res) => {
    try {
      const author = await Author.findOne({ _id: req.params.id });
      res.status(200).json({model: author, message: "success"});
    } catch (error) {
      res
        .status(400)
        .json({ error: error.message, message: "failed : author not found" });
      console.log(error);
    }
}

