import Product from "../models/Product.js"

export const getProducts = (req, res) => {
    return res.status(200).json({
        status: 'success',
        data: 'got products'
    })
}

export const createProduct = async (req, res) => {
    const { title } = req.body;
    try {
        const newProduct = await Product.create({
            title
        })
        return res.status(200).json({
            status: "success",
            data: 'product successfully created',
            newProduct
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            data: error
        })

    }
}