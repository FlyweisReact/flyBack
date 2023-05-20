/** @format */
const nodemailer = require("nodemailer");

module.exports.addContactData = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      auth: {
        user: "info@flyweis.technology",
        pass: "ygkojtgemllsgpgs",
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailData = {
      from: {
        address: "info@flyweis.technology",
      },
      replyTo: "info@flyweis.technology",
      to: "info@flyweis.technology",
      subject: `form message`,
      text: `Name: ${name} , Email: ${email} Phone: ${phone}, Subject: ${subject} , Message : ${message}`,
      html: `Name: ${name} , Email: ${email} , Phone: ${phone} , Subject: ${subject} , Message : ${message}`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
};
