interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
}
export default function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl border-t pt-6 ${
        inverse ? "border-slate-700" : "border-slate-300"
      }`}
    >
      <p
        className={`text-sm font-bold uppercase tracking-[0.16em] ${
          inverse ? "text-cyan-300" : "text-teal-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-[2.7rem] ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
            inverse ? "text-slate-200" : "text-slate-700"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
