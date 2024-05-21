import multer from 'multer';
import path from 'path';
import fs from 'fs';
import inventoryProductSchema from '../models/inventoryProduct.models';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync("uploads/Inventory/")) {
            cb(null, "uploads/Inventory/");
        } else {
            fs.mkdirSync("uploads/Inventory/")
            cb(null, "uploads/Inventory/");
        }
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const orgName = file.originalname;
        const imgArr = orgName.split('.')
        imgArr.pop();
        const fname = imgArr.join('.')
        const ext = path.extname(orgName)
        cb(null, fname + "-" + uniqueSuffix + ext);
    },
})

const upload = multer({ storage: storage });

export const addinventoryProductData = (req, res) => {
    try {
        const uploadinventoryProData = upload.fields([
            { name: 'images', maxCount: 10 }
        ]);
        uploadinventoryProData(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    message: err.message,
                });
            }

            let img = [];

            if (req.files['images']) {
                req.files['images'].forEach((image) => {
                    img.push(image.filename);
                });
            }

            // 
            const { title, petrol, special, displacement, name, name1, buy, msrp, body, mileage, transmission, fuelType, engine, year, drive, exteriorColor, interiorColor, vin, cityMPG, hwyMPG, layout, engineVol, typeDrive, horsePower, power, torque, compRatio, speed, mph, gears } = req.body;

            const inventoryProductData = await new inventoryProductSchema({
                title: title,
                petrol: petrol,
                special: special,
                images: img,
                name: name,
                name1: name1,
                buy: buy,
                msrp: msrp,
                body: body,
                mileage: mileage,
                transmission: transmission,
                fuelType: fuelType,
                engine: engine,
                year: year,
                drive: drive,
                exteriorColor: exteriorColor,
                interiorColor: interiorColor,
                vin: vin,
                cityMPG: cityMPG,
                displacement: displacement,
                hwyMPG: hwyMPG,
                layout: layout,
                engineVol: engineVol,
                typeDrive: typeDrive,
                horsePower: horsePower,
                power: power,
                torque: torque,
                compRatio: compRatio,
                speed: speed,
                mph: mph,
                gears: gears
            });

            inventoryProductData.save();
            if (inventoryProductData) {
                return res.status(201).json({
                    data: inventoryProductData,
                    message: "Created",
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const getinventoryProductDataAll = async (req, res) => {
    try {
        const inventoryProductSchemaAll = await inventoryProductSchema.find();
        // console.log(inventoryProductSchemaAll);
        if (inventoryProductSchemaAll) {
            return res.status(200).json({
                data: inventoryProductSchemaAll,
                message: "Success",
                filepath: "http://localhost:8001/uploads/Inventory/"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const getinventoryProductData = async (req, res) => {
    try {
        const inventoryProductDataID = req.params.inventoryProductData_id;
        const inventoryProductData = await inventoryProductSchema.findOne({ status: 1, _id: inventoryProductDataID });
        if (inventoryProductData) {
            return res.status(200).json({
                data: inventoryProductData,
                message: "Success",
                filepath: "http://localhost:8001/uploads/Inventory/"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const updateinventoryProductData = async (req, res) => {
    try {
        const uploadinventoryProductData = upload.fields([
            { name: 'images', maxCount: 10 }
        ]);
        uploadinventoryProductData(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    message: err.message,
                });
            }

            try {
                const allinventoryProductDataId = req.params.inventoryProductData_id;

                let img = '';

                if (req.files['images']) {
                    const newImage = req.files['images'][0];
                    img = newImage.filename;
                }

                const updateData = {
                    ...req.body,
                    images: img
                };

                const updateinventoryProductData = await inventoryProductSchema.updateOne({ _id: allinventoryProductDataId }, { $set: updateData });

                if (updateinventoryProductData.matchedCount) {
                    return res.status(200).json({
                        message: "Updated",
                    });
                }
            } catch (error) {
                return res.status(500).json({
                    message: error.message,
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const deleteinventoryProductData = async (req, res) => {
    try {
        const allinventoryProductDataId = req.params.inventoryProductData_id;
        const inventoryProductData = await inventoryProductSchema.findOne({ _id: allinventoryProductDataId });

        if (inventoryProductData.images && inventoryProductData.images.length > 0) {
            // Delete each image file
            inventoryProductData.images.forEach((image) => {
                const imagePath = './uploads/Home/' + image;
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            });
        }

        const deletedData = await inventoryProductSchema.deleteOne({ _id: allinventoryProductDataId });
        if (deletedData.acknowledged) {
            return res.status(200).json({
                message: 'Deleted'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
