import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import { profile } from "../../constants";

const { REACT_APP_EMAILJS_SERVICE_ID: SERVICE, REACT_APP_EMAILJS_TEMPLATE_ID: TEMPLATE, REACT_APP_EMAILJS_PUBLIC_API: KEY } = process.env;
const emailjsReady = Boolean(SERVICE && TEMPLATE && KEY);

const empty = { name: "", email: "", subject: "", message: "" };

const Contact = ({ theme }) => {
    const [form, setForm] = useState(empty);
    const [loading, setLoading] = useState(false);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const submitHandler = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = form;
        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            return toast.error("Merci de remplir tous les champs.");
        }

        // Sans configuration EmailJS, on ouvre le client mail de la personne.
        if (!emailjsReady) {
            const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
            window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
            return;
        }

        setLoading(true);
        emailjs.send(SERVICE, TEMPLATE, form, KEY).then(
            () => {
                setLoading(false);
                setForm(empty);
                toast.success("Message envoyé. Je vous réponds rapidement.");
            },
            () => {
                setLoading(false);
                toast.error(`L'envoi a échoué. Écrivez-moi directement à ${profile.email}.`);
            }
        );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Contact</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Discutons de votre projet</h3>
                    <p className="contact__details">
                        Je cherche une première opportunité en développement full stack. Écrivez-moi à{" "}
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                    </p>
                </div>

                <form onSubmit={submitHandler} className="contact__form" noValidate>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <label htmlFor="c-name" className="sr-only">Votre nom</label>
                            <input id="c-name" name="name" type="text" autoComplete="name" className="contact__form-input"
                                placeholder="Votre nom" value={form.name} onChange={onChange} />
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="c-email" className="sr-only">Votre e-mail</label>
                            <input id="c-email" name="email" type="email" autoComplete="email" className="contact__form-input"
                                placeholder="Votre e-mail" value={form.email} onChange={onChange} />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <label htmlFor="c-subject" className="sr-only">Objet</label>
                        <input id="c-subject" name="subject" type="text" className="contact__form-input"
                            placeholder="Objet" value={form.subject} onChange={onChange} />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label htmlFor="c-message" className="sr-only">Votre message</label>
                        <textarea id="c-message" name="message" rows="10" className="contact__form-input"
                            placeholder="Votre message" value={form.message} onChange={onChange}></textarea>
                    </div>

                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? "Envoi en cours…" : "Envoyer le message"}
                    </button>
                </form>
                <ToastContainer position="bottom-right" theme={theme} />
            </div>
        </section>
    );
};

export default Contact;
