const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kamariyakhushbu@gmail.com",       // your email
        pass: "khushbu24"          // Gmail App Password
      }
    });

    const mailOptions = {
      from: email,
      to: "kamariyakhushbu@gmail.com",           // where you want to receive
      subject: `Message from ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    res.status(500).json({ error: "Email not sent" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
