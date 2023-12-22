import connectToDatabase from "../../lib/dbConnect";
import multer from "multer";
import mongoose, { model, models } from "mongoose";

connectToDatabase();

const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

const formDataSchema = new mongoose.Schema({
  Name: String,
  Designation: String,
  Quote: String,
  image:{


    filename: String,
    data: Buffer,
 
  }

  // Add more fields as needed
});
const FormDataModel = models.FormData || model("FormData", formDataSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      upload.single("image")(req, res, async function (err) {
        if (err) {
          console.error("Error uploading image:", err);
          return res
            .status(500)
            .json({ success: false, message: "Internal Server Error", err });
        }
        console.log(req.body);
        console.log(req.file);
        const { Name, Designation, Quote } = req.body;
        const { originalname, buffer } = req.file;

        const newFormData = new FormDataModel({
          Name,
          Designation,
          Quote,
          image:{

              filename:originalname,
              data:buffer,
            }
        });

        await newFormData.save();
        res
          .status(201)
          .json({ success: true, message: "Form data saved successfully." });
      });
    } catch (error) {
      console.error("Error saving form data:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
