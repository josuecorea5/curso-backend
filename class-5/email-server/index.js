const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const main = async () => {
  const info = await transporter.sendMail({
    from: `"Josue David Coreas Paiz" ${process.env.EMAIL_USER}`,
    to: "j.william03@hotmail.com",
    subject: "Implementación de servidor de correos",
    text: "¡Servidor de correo funcionando excelente!",
  });

  console.log("Correo enviado: ", info.messageId);
};

main()
  .then(() => console.log("Correo enviado"))
  .catch((error) => console.error("Error al enviar el correo: ", error));
