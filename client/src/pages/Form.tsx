import { useState } from "react";
import "../styles/form.css";
import { useTranslation } from "../contexts/LocaleContext";

function Form() {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "api-key": import.meta.env.VITE_API_KEY,
      },

      body: JSON.stringify({
        sender: { name: "Codex Art", email: "gary.gras07@gmail.com" },
        to: [{ email, name }],
        subject: "Récapitulatif de votre demande 🖼️",

        htmlContent: `<img src = "https://drive.google.com/uc?id=1y1-1h5iAZxZhr7Ub-u1d7oaDK0oMCck4" alt="image pour mail" width="600"/> <h2> Voici votre message ${firstname} ${name}:</h2> <br> <p>${message}</p><br>
         <h2>Il a bien été pris en compte et sera traité prochainement.</h2>
         <br>
         <h3>La Codex Art</h3>
         <img src = "https://drive.google.com/uc?id=1PR_TomyrM7JiDEsigC_G824edVfkO9UL" alt="logo Codex Art" width="100"/>

         `,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Message envoyé");
        setName("");
        setFirstName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error(error));
  }

   const { translations } = useTranslation();

  return (
    <form onSubmit={handleSubmit}>
      <h1>{translations.form.contact}</h1>

      <label htmlFor="name">{translations.form.nom} :</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="firstname">{translations.form.prénom} :</label>
      <input
        type="text"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="email">{translations.form.email} :</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">{translations.form.message} :</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">{translations.form.soumettre}</button>
    </form>
  );
}

export default Form;
