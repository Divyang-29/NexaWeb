import express from "express";
import Support from "../Models/support.js";

const router = express.Router();

router.get("/home", (req, res) => {
  res.send("Home page");
});

router.get("/product", (req, res) => {
  res.send("Product page");
});

router.get("/contact-us", (req, res) => {
  res.send("Contact us page");
});

router.post("/contact-us", async (req, res) => {
  try {
    const formData = new Support(req.body);
    await formData.save();

    res.status(201).json({
      success: true,
      message: "Form submitted successfully!",
      data: formData,
    });
  } catch (err) {
    console.log(err);
  }
});

export default router;
