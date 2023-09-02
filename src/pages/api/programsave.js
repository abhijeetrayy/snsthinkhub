import connectToDatabase from "../../lib/dbConnect";
import FormDataModel from "../../dbModel/program";

async function submitForm(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { formData } = req.body;
    console.log(formData);
    try {
        await connectToDatabase();
        const programdata = new FormDataModel({
            CourseName: formData.title,
            
            DynamicData: formData,
        });
        await programdata.save();
        return res.status(200).json({ message: "Form data saved successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Failed to save form data" });
    }
}

export default submitForm;
