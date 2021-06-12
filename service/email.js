const Mailgen = require("mailgen");
const sgMail = require("@sendgrid/mail");
const config = require("../config/email.json");
require("dotenv").config();

class EmailService {
  #sender = sgMail;
  #GenerateTemplate = Mailgen;
  constructor(env) {
    switch (env) {
      case "development":
        this.link = config.dev;
        break;
      case "stage":
        this.link = config.stage;
        break;
      case "production":
        this.link = config.prod;
        break;
      default:
        this.link = config.dev;
        break;
    }
  }

  #createTemplate(verificationToken) {
    const mailGenerator = new this.#GenerateTemplate({
      theme: "salted",
      product: {
        name: "Phonebook",
        link: this.link,
      },
    });
    const template = {
      body: {
        intro: "Welcome!",
        action: {
          instructions: "To get started please click here:",
          button: {
            color: "#22BC66", // Optional action button color
            text: "Confirm account",
            link: `${this.link}/api/users/auth/verify/${verificationToken}`,
          },
        },
        outro: "Need help- just reply to this email.",
      },
    };
    return mailGenerator.generate(template);
  }

  async sendEmail(verificationToken, email) {
    const emailBody = this.#createTemplate(verificationToken);
    this.#sender.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: "stmih53@gmail.com", // Use the email address or domain you verified above
      subject: "Confirmation of register",
      html: emailBody,
    };
    await this.#sender.send(msg);
  }
}

module.exports = EmailService;
