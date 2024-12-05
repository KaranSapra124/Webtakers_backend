const nodemailer = require("nodemailer");

exports.sendMail = async (name, email, mobile, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use a service like Gmail, Outlook, or custom SMTP
    auth: {
      user: "chetan.webtakersit@gmail.com", // Your email address
      pass: "heql gyto azmh vlgp", // Your email password (or app-specific password)
    },
  });

  const mailOptions = {
    from: "chetan.webtakersit@gmail.com",
    to: "info@webtakersit.com ",
    subject: "New Contact Request",
    html: `
      <table style="width: 100%; max-width: 600px; margin: 20px auto; border-collapse: collapse; font-family: Arial, sans-serif; background-color: #f4f4f4; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); border-radius: 10px; overflow: hidden;">
        <thead>
          <tr style="background-color: #007bff; color: #fff; text-align: left;">
            <th colspan="2" style="padding: 20px; font-size: 1.5rem;">Contact Request Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style="padding: 15px; font-size: 1rem; background-color: #f9f9f9; color: #333;">Name:</th>
            <td style="padding: 15px; font-size: 1rem; background-color: #fff; color: #333;">${name}</td>
          </tr>
          <tr>
            <th style="padding: 15px; font-size: 1rem; background-color: #f9f9f9; color: #333;">Email:</th>
            <td style="padding: 15px; font-size: 1rem; background-color: #fff; color: #333;">${email}</td>
          </tr>
          <tr>
            <th style="padding: 15px; font-size: 1rem; background-color: #f9f9f9; color: #333;">Mobile:</th>
            <td style="padding: 15px; font-size: 1rem; background-color: #fff; color: #333;">  ${mobile}</td>
          </tr>
          <tr>
            <th style="padding: 15px; font-size: 1rem; background-color: #f9f9f9; color: #333;">Message:</th>
            <td style="padding: 15px; font-size: 1rem; background-color: #fff; color: #333; line-height: 1.5;">${message}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding: 10px; text-align: center; background-color: #007bff; color: #fff; font-size: 0.9rem;">
              <p>© 2024 WebTakersIT | All Rights Reserved</p>
            </td>
          </tr>
        </tfoot>
      </table>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error occurred:", err);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
