import React from "react";
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

// Example images (replace with your own or use from assets)
const services = [
  {
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostics and treatments.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care for all critical conditions.",
    image: "./p2.jpg",
  },
  {
    title: "Diagnostics",
    description: "Modern laboratory and imaging services for accurate diagnosis.",
    image: "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_640.jpg",
  },
  {
    title: "Surgery",
    description: "State-of-the-art operation theaters and expert surgeons.",
    image: "https://cdn.pixabay.com/photo/2013/02/09/04/19/surgery-79584_640.jpg",
  },
  {
    title: "Outpatient Care",
    description: "Consultations and follow-ups with experienced specialists.",
    image: "https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_640.jpg",
  },
  {
    title: "Ambulance",
    description: "Quick and reliable ambulance services for emergencies.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

const Services = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
      Our Services
    </Typography>
    <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
      We offer a wide range of healthcare services to meet your needs.
    </Typography>
    <Grid container spacing={4}>
      {services.map((service, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image={service.image}
              alt={service.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Services;