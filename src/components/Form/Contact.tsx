import { FormEvent, FocusEvent, ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FormInput from "./FormInputs";
import FormSubmitMsg from "../Layout/FormSubmitMsg";
import SectionHeading from "../UI/SectionHeading";
import { siteConfig } from "../../config/site";

type SubmissionState = "false" | "sending" | "sent" | "error";

type FormValues = {
  name: string;
  nameTouched: boolean;
  email: string;
  emailTouched: boolean;
  phone: string;
  message: string;
  messageTouched: boolean;
};

type FormInputData = {
  id: string;
  name: "name" | "email" | "phone" | "message";
  type: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
  required: boolean;
  autoComplete: string;
};

function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    nameTouched: false,
    email: "",
    emailTouched: false,
    phone: "",
    message: "",
    messageTouched: false,
  });
  const [isSubmitted, setIsSubmitted] = useState<SubmissionState>("false");

  const formInputData: FormInputData[] = [
    {
      id: "name-input",
      name: "name",
      type: "text",
      placeholder: "Your name",
      label: "Name",
      errorMessage: "Please enter your name.",
      required: true,
      autoComplete: "name",
    },
    {
      id: "email-input",
      name: "email",
      type: "email",
      placeholder: "name@example.com",
      label: "Email",
      errorMessage: "Please enter a valid email address.",
      required: true,
      autoComplete: "email",
    },
    {
      id: "phone-input",
      name: "phone",
      type: "tel",
      placeholder: "Optional",
      label: "Phone",
      required: false,
      autoComplete: "tel",
    },
    {
      id: "message-input",
      type: "text",
      name: "message",
      placeholder: "How can I help?",
      label: "Message",
      errorMessage: "Please enter a message.",
      required: true,
      autoComplete: "off",
    },
  ];

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = event.target.name as keyof FormValues;

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: event.target.value,
      [`${fieldName}Touched`]: false,
    }));
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = event.target.name as keyof FormValues;

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: event.target.value.trim(),
      [`${fieldName}Touched`]: true,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted("sending");

    const data = new FormData(event.currentTarget);

    fetch(event.currentTarget.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        setIsSubmitted(response.ok ? "sent" : "error");
      })
      .catch(() => {
        setIsSubmitted("error");
      });
  };

  const contactDetails = [
    {
      label: "Phone",
      value: siteConfig.phoneDisplay,
      href: siteConfig.phoneHref,
      icon: faPhone,
    },
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: faEnvelope,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/s-sunder",
      href: siteConfig.linkedIn,
      icon: faLinkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="anchor-target bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-[82rem]">
        <div id="contact-heading">
          <SectionHeading
            eyebrow="Contact"
            title="Start a conversation"
            description="Available for early-career engineering and EIT roles across Canada and the United States, with flexibility for travel, on-site, and hybrid work."
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.28fr)] lg:gap-14 xl:gap-20">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-slate-950">
              Suhas Sunder
            </p>
            <p className="mt-4 flex items-start gap-3 text-base leading-7 text-slate-600">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-teal-700"
                aria-hidden="true"
              />
              <span>
                {siteConfig.location}
                <br />
                {siteConfig.mobility}
              </span>
            </p>

            <address className="mt-8 grid gap-5 not-italic">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.label === "LinkedIn" ? "_blank" : undefined}
                  rel={
                    detail.label === "LinkedIn"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-h-11 items-start gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center border border-slate-300 bg-[#f7f6f2] text-teal-800 transition group-hover:border-teal-700">
                    <FontAwesomeIcon icon={detail.icon} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-sm font-bold uppercase tracking-[0.12em] text-slate-700">
                      {detail.label}
                    </span>
                    <span className="mt-1 block break-words text-base font-semibold leading-7 text-slate-900 underline decoration-slate-300 underline-offset-4 group-hover:text-teal-800 group-hover:decoration-teal-700">
                      {detail.value}
                    </span>
                  </span>
                </a>
              ))}
            </address>

            <a
              href={siteConfig.url}
              className="mt-6 inline-flex min-h-11 items-center text-base font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:text-teal-800 hover:decoration-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
            >
              suhassunder.ca
            </a>
          </div>

          <div className="border border-slate-300 bg-[#f7f6f2] p-5 sm:p-8 lg:p-10">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
              Send a message
            </h3>
            <p className="mt-2 text-base leading-7 text-slate-700">
              Required fields are marked with an asterisk.
            </p>

            <form
              aria-label="Contact form"
              id="contact-form"
              action="https://formspree.io/f/xknaendo"
              method="POST"
              onSubmit={handleSubmit}
              className="mt-6 grid gap-5"
            >
              {isSubmitted === "false" ? (
                <>
                  {formInputData.map((data) => (
                    <FormInput
                      key={data.id}
                      {...data}
                      value={values[data.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={
                        data.required ? values[`${data.name}Touched`] : false
                      }
                    />
                  ))}

                  <button
                    className="mt-2 min-h-12 cursor-pointer rounded-md border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-teal-800 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
                    type="submit"
                  >
                    Send message
                  </button>
                </>
              ) : (
                <FormSubmitMsg submissionState={isSubmitted} />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
