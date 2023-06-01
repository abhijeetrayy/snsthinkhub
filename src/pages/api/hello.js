import connectToDatabase from "../../lib/dbConnect";
import FormDataModel from "../../dbModel/internship";

async function submitForm(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const {
        Designation,
        about,
        mode,
        Certificate,
        Duration,
        ComapnyName,
        HRName,
        Email,
        Country,
        Location,
        tag,
    } = req.body;

    try {
        await connectToDatabase();
        const formData = new FormDataModel({
            Designation,
            about,
            mode,
            Certificate,
            Duration,
            ComapnyName,
            HRName,
            Email,
            Country,
            Location,
            tag,
        });
        await formData.save();
        return res.status(200).json({ message: "Form data saved successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Failed to save form data" });
    }
}

export default submitForm;
