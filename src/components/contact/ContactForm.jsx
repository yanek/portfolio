import { useContext, useRef, useState } from "react";
import Input from "./Input.jsx";
import { LocaleState } from "../App.tsx";
import emailJs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SubmitButton from "./SubmitButton.jsx";
import LocalizedText from "../LocalizedText.tsx";
import Notification from "./Notification.jsx";

function ContactForm() {
  const l = useContext(LocaleContext).locale;
  const captchaRef = useRef(null);
  const form = useRef();
  const [isBusy, setBusy] = useState(false);
  const [toast, setToast] = useState(null);

  const handleCloseNotification = (e) => {
    e.preventDefault();
    setToast(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusy(true);

    emailJs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_API_KEY,
        },
      )
      .then(() => {
        setToast(
          <Notification type="success" onClose={handleCloseNotification}>
            <LocalizedText textId="Contact_SentSuccess" />
          </Notification>,
        );
        form.current.reset();
      })
      .catch(() => {
        setToast(
          <Notification type="error" onClose={handleCloseNotification}>
            <LocalizedText textId="Contact_SentError" />
          </Notification>,
        );
      })
      .finally(() => setBusy(false));
  };

  return (
    <>
      {toast}

      <form ref={form} onSubmit={handleSubmit}>
        <div className="user_identity">
          <Input
            name="user_name"
            label={l.getText("Contact_Name")}
            placeholder="John Doe"
          />
          <Input
            name="user_email"
            label={l.getText("Contact_Email")}
            placeholder="john.doe@mail.com"
            type="email"
          />
        </div>
        <Input
          name="message"
          label={l.getText("Contact_Message")}
          placeholder="..."
          type="textarea"
        />
        <div className="recaptcha">
          <ReCAPTCHA
            sitekey="6LcuGsMpAAAAAHadG6fvEmuFBGm9s5y4M58XciRR"
            ref={captchaRef}
          />
        </div>
        <SubmitButton isBusy={isBusy} />
      </form>
    </>
  );
}

export default ContactForm;
