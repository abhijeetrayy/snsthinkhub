import connectToDatabase from "../../lib/dbConnect";
import FormDataModel from "../../dbModel/program";

async function submitForm(req, res) {


    try {
        await connectToDatabase();

        const modelId = '647545bd6236eed10093daa9';
        FormDataModel.find()
            .then(model => {
                console.log('Fetched model:', model);
            })
            .catch(error => {
                console.error('Error fetching model:', error);
            });

        return res.status(200).json({ message: "Fetched successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Failed to Fetch" });
    }
}

export default submitForm;
