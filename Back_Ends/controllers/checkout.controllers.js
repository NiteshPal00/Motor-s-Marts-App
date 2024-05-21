// import cartProductModels from "../models/cartProduct.models";
import checkoutModels from "../models/checkout.models";
// userID, cartID, 
export const addCheckout = async (req, res) => {
    try {
        const { first_name, last_name, email, phone, company_name, street_address, town, state, zip_code } = req.body;

        // const product = await cartProductModels.findOne({ _id: cartID });

        const saveCheckout = new checkoutModels({
            // cartID: cartID,
            // userID: userID,
            // quantity: product.quantity,
            // buy: product.buy,
            // title: product.title,
            first_name: first_name,
            last_name: last_name,
            company_name: company_name,
            street_address: street_address,
            email: email,
            town: town,
            state: state,
            zip_code: zip_code,
            phone: phone,
        });
        saveCheckout.save();

        if (saveCheckout) {
            return res.status(201).json({
                data: saveCheckout,
                message: "Successfully data inserted.",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const getCheckouts = async (req, res) => {
    try {
        const userID = req.params.userid;
        console.log(userID)
        const getCheckoutData = await checkoutModels.find({ userID: userID });
        if (getCheckoutData) {
            return res.status(200).json({
                data: getCheckoutData,
                message: "Successfully fetched.",
                filepath:"http://localhost:8001/uploads/Home"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
