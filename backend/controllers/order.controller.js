import asyncHandler from "express-async-handler";
import Order from "../models/order.js";

const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        ShippingScreenAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;
    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error("No Order Items");
        return;
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            ShippingScreenAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
});

export { addOrderItems };