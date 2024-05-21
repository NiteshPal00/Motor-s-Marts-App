import multer from 'multer';
import path from 'path';
import fs from 'fs';
import productHomeSchema from '../models/productHome.models';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync("uploads/Home/")) {
            cb(null, "uploads/Home/");
        } else {
            fs.mkdirSync("uploads/Home/")
            cb(null, "uploads/Home/");
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

export const addproductHomeData = (req, res) => {
    try {
        const uploadHomeProtData = upload.fields([
            { name: 'images', maxCount: 10 }
        ]);
        uploadHomeProtData(req, res, async function (err) {
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
          
            const { title, petrol, special, displacement, name, name1, buy, msrp, body, mileage, transmission, fuelType, engine, year, drive, exteriorColor, interiorColor, vin, cityMPG, hwyMPG, layout, engineVol, typeDrive, horsePower, power, torque, compRatio, speed, mph, gears } = req.body;

            const productHomeData = await new productHomeSchema({
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

            productHomeData.save();
            if (productHomeData) {
                return res.status(201).json({
                    data: productHomeData,
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

export const getproductHomeDataAll = async (req, res) => {
    try {
        const productHomeSchemaAll = await productHomeSchema.find();
        console.log(productHomeSchemaAll);
        if (productHomeSchemaAll) {
            return res.status(200).json({
                data: productHomeSchemaAll,
                message: "Success",
                filepath: "http://localhost:8001/uploads/Home/"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const getproductHomeData = async (req, res) => {
    try {
        const productHomeDataID = req.params.productHomeData_id;
        const productHomeDataData = await productHomeSchema.findOne({ status: 1, _id: productHomeDataID }).populate();
        if (productHomeDataData) {
            return res.status(200).json({
                data: productHomeDataData,
                message: "Success",
                filepath: "http://localhost:8001/uploads/Home/"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const updateproductHomeData = async (req, res) => {
    try {
        const uploadproductHomeData = upload.fields([
            { name: 'images', maxCount: 10 }
        ]);
        uploadproductHomeData(req, res, async function (err) {
            if (err) {
                return res.status(400).json({
                    message: err.message,
                });
            }

            try {
                const allproductHomeDataId = req.params.productHomeData_id;

                let img = '';

                if (req.files && req.files['images'] instanceof Array) {
                    img = req.files['images'].map((image) => image.filename);
                }

                const updateData = {
                    ...req.body,
                    images: img
                };

                const updateproductHomeData = await productHomeSchema.updateOne({ _id: allproductHomeDataId }, { $set: updateData });
                console.log(updateproductHomeData);
                if (updateproductHomeData.matchedCount) {
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


export const deleteproductHomeData = async (req, res) => {
    try {
        const allproductHomeDataId = req.params.productHomeData_id;
        const productHomeData = await productHomeSchema.findOne({ _id: allproductHomeDataId });

        if (productHomeData.images && productHomeData.images.length > 0) {
            // Delete each image file
            productHomeData.images.forEach((image) => {
                const imagePath = './uploads/Home/' + image;
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            });
        }

        const deletedData = await productHomeSchema.deleteOne({ _id: allproductHomeDataId });
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



