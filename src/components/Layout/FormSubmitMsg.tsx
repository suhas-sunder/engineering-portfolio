interface FormSubmitMsgProps {
  submissionState: "sending" | "sent" | "error";
}

function FormSubmitMsg({ submissionState }: FormSubmitMsgProps) {
  const messageConfig = {
    sending: {
      message: "Sending your message…",
      className:
        "border border-slate-300 bg-white px-4 py-4 text-sm font-semibold text-slate-700",
    },
    sent: {
      message: "Thank you. Your message has been sent successfully.",
      className:
        "border border-teal-300 bg-teal-50 px-4 py-4 text-sm font-semibold text-teal-900",
    },
    error: {
      message:
        "Your message was not sent. Please try again or email suhas@live.ca directly.",
      className:
        "border border-red-300 bg-red-50 px-4 py-4 text-sm font-semibold text-red-800",
    },
  };

  const currentMessage = messageConfig[submissionState];

  return (
    <div role="status" aria-live="polite">
      <p className={currentMessage.className}>{currentMessage.message}</p>
    </div>
  );
}

export default FormSubmitMsg;
