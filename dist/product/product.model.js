"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
});
//# sourceMappingURL=product.model.js.map