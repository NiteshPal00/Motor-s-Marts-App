import compareProductModels from "../models/compareProduct.models";
import productHomeModels from "../models/productHome.models";

export const addToCompare = async (req, res) => {
    try {
        const { productID, userID } = req.body;
        
        const product = await productHomeModels.findOne({ _id: productID });

        const saveCompare = new compareProductModels({
            userID: userID,
            productID: productID,
            title: product.title,
            image: product.images[0],
            body: product.body,
            mileage: product.mileage,
            transmission: product.transmission,
            fuelType: product.fuelType,
            engine: product.engine,
            year: product.year,
            drive: product.drive,
            exteriorColor: product.exteriorColor,
            interiorColor: product.interiorColor,
        });

        await saveCompare.save();

        if (saveCompare) {
            return res.status(200).json({
                message: "Successfully added to Compare",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


export const getCompareData = async (req, res) => {
    try {
        const userID = req.params.userid;

        const CompareItems = await compareProductModels.find({ userID: userID });
        if (CompareItems) {
            return res.status(200).json({
                data: CompareItems,
                message: "Success",
                filepath:"http://localhost:8001/uploads/Home"

            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const deleteCompareItem = async (req, res) => {
    try {
        const CompareID = req.params.compare_id
        const deleteItem = await compareProductModels.deleteOne({ _id: CompareID });
        if (deleteItem.acknowledged) {
            return res.status(200).json({
                message: 'deleted'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
