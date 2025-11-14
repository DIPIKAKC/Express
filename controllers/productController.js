export const getProducts = (req, res) => {
    return res.status(200).json({
        status: 'success',
        data: 'got products'
    })
}

export const createProduct = (req, res) => {
    const { title } = req.body;
    console.log(title);
    return res.status(200).json({
        status: "success",
        data: title
    })
}