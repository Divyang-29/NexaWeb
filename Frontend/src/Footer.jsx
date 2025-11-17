import React from "react";
import "./Footer.css";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box className="footer-container">
      <Grid container spacing={5}>
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="footer-title">
            Nexaweb
          </Typography>
          <Typography variant="body2">
            Building modern digital solutions for businesses worldwide.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="footer-title">
            Quick Links
          </Typography>
          <Link href="/nexaweb/home" className="footer-link">
            Home
          </Link>
          <br />
          <Link href="/nexaweb/product" className="footer-link">
            Product
          </Link>
          <br />
          <Link href="/nexaweb/contact-us" className="footer-link">
            Contact Us
          </Link>
        </Grid>

        {/* Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="footer-title">
            Services
          </Typography>
          <Typography>Web Development</Typography>
          <Typography>Mobile App</Typography>
          <Typography>UI/UX Design</Typography>
        </Grid>

        {/* Social */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="footer-title">
            Follow Us
          </Typography>
          <IconButton color="inherit" className="icon"><Facebook /></IconButton>
          <IconButton color="inherit" className="icon"><Instagram /></IconButton>
          <IconButton color="inherit" className="icon"><Twitter /></IconButton>
          <IconButton color="inherit" className="icon"><LinkedIn /></IconButton>
        </Grid>
      </Grid>

      <Box className="footer-bottom">
        <Typography variant="body2">
          © {new Date().getFullYear()} Nexaweb. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
