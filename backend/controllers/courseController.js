import Cart from "../models/cart.js"

const addToCart = async (req, res) => {
    const { userId } = req.user
    const { productId } = req.body

    const existingItem = await Cart.findOne({
        user: userId, product: productId
    })

    if (existingItem) {
        existingItem.quantity += 1
        await existingItem.save()
        return res.status(200).json({ message: `quantity increased!` })
    } else {
        await Cart.create({
            user: userId, product: productId, quantity: 1
        })
        res.status(201).json({ message: `item added to cart!` })
    }
}

const getCartItems = async (req, res) => {
    const { userId } = req.user

    const cartItems = await Cart.find({
        user: userId
    }).populate(`product`)

    res.status(201).json({ cartItems })
}

const deleteFromCart = async (req, res) => {
    const { userId } = req.user
    const { productId } = req.body

    const existingItem = await Cart.findOne({
        user: userId, product: productId
    })

    if (!existingItem) return res.status(404).json({ message: `item not found!` })

    if (existingItem.quantity > 1) {
        existingItem.quantity -= 1
        await existingItem.save()
        return res.status(200).json({ message: `quantity decreased!` })
    } else {
        await Cart.deleteOne({
            user: userId, product: productId
        })
        res.status(200).json({ message: `item removed from cart!` })
    }
}

export { addToCart, getCartItems, deleteFromCart }