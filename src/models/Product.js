import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
        min: 6
    },
    description: {
        type: String,
        require: true,
        min: 10
    },
    category: {
        type: String,
        require: true,
        enum: [
            "groomaccs",
            "wedding",
            "prom",
            "motherof",
            "bridalaccs",
            "quinces",
            "tuxedo",
            "bridesmaid",
            "flowerg",
        ]
    },
    subCat: [{
        type: String
    }
    ],
    tags: [{
        type: String
        }
    ],
    brand: {
        type: String,
    },
    isNewest: {
        type: Boolean,
    },
    isFeatured: {
        type: Boolean,
    },
    published: {
        type: Boolean,
    },
    price: {
        type: Number,
        require: true,
    },
    salesPrice: {
        type: Number,
    },
    mainImageUrl: {
        type: String
    },
    imgsSrc: [{
        type: String
        }
    ],
    sizes:  [{
        type: String
        }
    ],
    colors:  [{
        type: String
        }
    ],
    rating: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    sku: {
        type: String,
    },
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
}, {timestamps: true})

export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema)
