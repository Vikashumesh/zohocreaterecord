var http = require('http');
const path = require('path');
const fs = require('fs');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;
const axios = require('axios');

app.use(express.json());

app.get("/apicall",async (req,res)=>{
    // const id = req.query.id;
    const coordinates = req.query.coordinates;
    const zoho_refreshToken = '1000.a75f74017d06e3de18e47ba3a010a8cd.567a4f1817e3f77a832b3ad59c0ae0fd';
    const zoho_clientID = '1000.ANJ0TSAG1454BSJWSALQOOUUQ3D2SA';    
    const zoho_clientSecret = '67c0cf2035779e386c9c106af8c71f01a18af1ea10';
    
    const temp = ' https://creatorapp.zoho.in/api/v2/agcane/ticketing/form/CAM';
     const refreshToken = 'https://accounts.zoho.in/oauth/v2/token?refresh_token='+zoho_refreshToken+'&client_id='+zoho_clientID+'&client_secret='+zoho_clientSecret+'&grant_type=refresh_token';
    
    axios.post(refreshToken).then(vik=>{
        
    axios.post(temp,
        {
            data:{
                "coordinates": coordinates
              }
        },
        {
    
    headers:{
        Authorization: 'Zoho-oauthtoken '+vik.data.access_token,
    },
}).then(response=>{
    console.log(response.data);
    res.send(response.data);
})
})
})
app.listen(PORT, console.log(`Server is stating at ${PORT}`));


