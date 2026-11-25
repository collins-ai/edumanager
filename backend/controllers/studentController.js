import Product from "../models/product.js"

const createProduct = async (req, res) => {
    const { title, image, category, oldPrice, newPrice } = req.body

    await Product.create({
        title, image, category, oldPrice, newPrice
    })

    res.status(201).json({ message: `${title} uploaded successfully!` })
}

const getAllProducts = async (req, res) => {
    const { category, sort, limit } = req.query
    const query = {}

    if (category) {
        query.category = category
    }

    let productsQuery = Product.find(query)

    if (sort === `latest`) {
        productsQuery = productsQuery.sort({ createdAt: -1 })
    }

    if (limit) {
        productsQuery = productsQuery.limit(Number(limit))
    }

    const allProducts = await productsQuery
    res.status(200).json({ allProducts })
}

const deleteProduct = async (req, res) => {
    console.log(req.params.id)
    //const { id } = req.params
    //console.log(id)
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: `${product.title} deleted successfully!` })
}

export { createProduct, getAllProducts, deleteProduct }