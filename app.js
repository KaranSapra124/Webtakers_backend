const express = require('express');
const cors = require("cors");
const { sendMail} = require("./Utils/sendMail")
const app = express();

// Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
      cors({
        origin: "https://webtakersitsolutions.com",
        credentials: true,
      })
    );

    app.post("/submit", async(req , res)=>{
      
      const { name , email ,  mobile, message,} = req.body

        await sendMail( name , email ,mobile, message, )
        return res.status(202).send({ message: "Email Sent!" })
    })


app.listen(4000, () => {
      console.log(`Server is running on http://localhost:${4000}`);
    });
