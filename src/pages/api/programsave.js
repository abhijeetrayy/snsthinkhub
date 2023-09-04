import connectToDatabase from "../../lib/dbConnect";
import FormDataModel from "../../dbModel/program";

async function submitForm(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { formDatas } = req.body;
    console.log(formDatas)
    try {
        await connectToDatabase();
        const programdata = new FormDataModel({
            CourseName: formDatas.formData.title,
            
            DynamicData: formDatas,
        });
        await programdata.save();
        return res.status(200).json({ message: "Form data saved successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Failed to save form data" });
    }
}

export default submitForm;
