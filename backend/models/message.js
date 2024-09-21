import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: [3, "Name cannot be shorter than 3 chars"],
        maxLength: [30, "Name cannot exceed 30 chars"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Number must be exact 11 digits"],
        maxLength: [11, "Number must be exact 11 digits"]
    },
    message: {
        type: String,
        required: true
    }
})

export const Message = mongoose.model("Message", messageSchema)