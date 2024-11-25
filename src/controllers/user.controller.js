import { json } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
const registerUser = asyncHandler(async (req, res) => {
  //get user details as per model
  //validate if inputs are empty or no
  //check if user already exists : email,username
  //check images and avatar
  //upload images to cloudinary and get the link
  //create enrty in db
  //remove pass and refreshtoken from response
  //check for user Creation
  //return res
  const { fullName, email, username, password } = req.body;
  console.log("email ", email);
});

export { registerUser };
