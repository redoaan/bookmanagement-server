import BookModel from "../models/Book.js";

class BookController {
  static BookRegistration = async (req, res) => {
    const { bookname, pubname, ageofpub, pagenoumofbook, publishdate } =
      req.body;
    const BookName = await BookModel.findOne({ bookname: bookname });
    if (BookName) {
      res.send({ status: "failed", message: "Book already exists" });
    } else {
      if (bookname && pubname && ageofpub && pagenoumofbook && publishdate) {
        try {
          const doc = new BookModel({
            bookname: bookname,
            pubname: pubname,
            ageofpub: ageofpub,
            pagenoumofbook: pagenoumofbook,
            publishdate: publishdate,
          });
          await doc.save();

          res.status(201).send({
            status: "success",
            message: "Registration Success",
          });
        } catch (error) {
          console.log(error);
          res.send({ status: "failed", message: "Unable to Register" });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    }
  };
}

export default BookController;
