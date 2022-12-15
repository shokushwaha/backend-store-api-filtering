const Product = require('../models/product')


const getAllProducts = async (req, res) => {
    // const products = await Product.find({featured:true});

    const { featured, company, name, sort } = req.query;

    const queryObject = {}

    if (featured)
        queryObject.featured = featured === 'true' ? true : false;
    if (company)
        queryObject.company = company;
    if (name)
        queryObject.name = name;
    try {
        const products = await Product.find(queryObject).sort('-name price');
        if (!products)
            res.status(500).json("something went wrong");
        res.status(200).json({ products });
    } catch (error) {
        console.log(error);
    }

}

module.exports = { getAllProducts };