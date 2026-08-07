interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  inverse?: boolean;
}
export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-5 border-t border-slate-300 pt-6 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8">
      <div
        className={`font-mono text-sm font-semibold tracking-[0.18em] ${
          inverse ? "text-cyan-300" : "text-teal-700"
        }`}
        aria-hidden="true"
      >
        {number}
      </div>

      <div className="max-w-3xl">
        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            inverse ? "text-cyan-300" : "text-teal-700"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-[2.7rem] ${
            inverse ? "text-white" : "text-slate-950"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
            inverse ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
