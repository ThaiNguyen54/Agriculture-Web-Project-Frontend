import {cloudinary}
import cloudinary from "cloudinary";

const cloudinaries = cloudinary.v2;


cloudinaries.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET
})

export default cloudinaries;