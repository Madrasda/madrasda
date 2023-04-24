import {createContext} from "react";

export const UserContext = createContext({
    userDetails: {}, vendorList: [], isLoggedIn: false,
    cart: {
        "id": 0, "cartItems": [{
            "id": 0, "product": {
                "id": 0, "name": "string", "discount": 0, "total": 0, "colorDTO": {
                    "id": 0, "color": "string", "hexValue": "string", "images": ["string"], "sizes": [{
                        "id": 0, "size": "string", "sku": "string"
                    }]
                }, "sizeDTO": {
                    "id": 0, "size": "string", "sku": "string"
                }, "frontImage": {
                    "id": 0, "imageUrl": "string", "color": 0
                }
            }, "quantity": 0
        }]
    }, addToCart: (productId) => {
    }, decrementQty: (itemId) => {

    }, incrementQty: (itemId) => {

    }, customQuantity: (itemId, quantity) => {

    }, removeItem: (itemId) => {

    },
});
