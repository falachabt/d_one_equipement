"use client";

import { useState, useTransition } from "react";

type QuoteState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialValues = {
  firstName: "",
  lastName: "",
  company: "",
  phone: "",
  email: "",
  equipmentType: "",
  rentalDuration: "",
  siteLocation: "",
  message: "",
};

export function QuoteForm() {
  const [values, setValues] = useState(initialValues);
  const [feedback, setFeedback] = useState<QuoteState>({
    status: "idle",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  function updateField(name: keyof typeof initialValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback({ status: "idle", message: "" });

    startTransition(async () => {
      try {
        const response = await fetch("/api/quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const payload = (await response.json()) as { message: string };

        if (!response.ok) {
          setFeedback({
            status: "error",
            message: payload.message || "Impossible d'envoyer la demande.",
          });
          return;
        }

        setValues(initialValues);
        setFeedback({
          status: "success",
          message: payload.message,
        });
      } catch {
        setFeedback({
          status: "error",
          message:
            "Le formulaire n'a pas pu etre transmis. Reessayez ou utilisez WhatsApp.",
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="line-card space-y-6">
      <div className="pb-4">
        <h2 className="font-display text-2xl font-bold text-[var(--foreground)]">
          Demande de devis
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Décrivez votre besoin. Réponse sous 24h.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nom" name="lastName" value={values.lastName} onChange={updateField} required />
        <Field
          label="Prenom"
          name="firstName"
          value={values.firstName}
          onChange={updateField}
          required
        />
        <Field label="Entreprise" name="company" value={values.company} onChange={updateField} />
        <Field label="Telephone" name="phone" value={values.phone} onChange={updateField} required />
        <Field
          label="Email"
          name="email"
          value={values.email}
          onChange={updateField}
          type="email"
          required
        />
        <Field
          label="Type d'engin souhaite"
          name="equipmentType"
          value={values.equipmentType}
          onChange={updateField}
          required
        />
        <Field
          label="Duree de location"
          name="rentalDuration"
          value={values.rentalDuration}
          onChange={updateField}
          placeholder="Ex: 2 semaines, 3 mois"
        />
        <Field
          label="Localisation du chantier"
          name="siteLocation"
          value={values.siteLocation}
          onChange={updateField}
          required
        />
      </div>

      <label className="block">
        <span className="form-label">Message</span>
        <textarea
          rows={6}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="form-input resize-none"
          placeholder="Volumetrie, dates, contraintes d'acces, besoin avec ou sans chauffeur..."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={isPending} className="btn-primary">
          {isPending ? "Envoi..." : "Envoyer la demande"}
        </button>
        <p className={`text-sm ${feedback.status === "error" ? "text-red-700" : "text-[var(--forest)]"}`}>
          {feedback.message}
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof typeof initialValues;
  value: string;
  onChange: (name: keyof typeof initialValues, value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}: FieldProps) {
  return (
    <label className="block">
      <span className="form-label">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        className="form-input"
      />
    </label>
  );
}
