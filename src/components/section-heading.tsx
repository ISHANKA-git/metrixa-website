type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  const titleColor = tone === "light" ? "text-white" : "text-zinc-950";
  const bodyColor = tone === "light" ? "text-zinc-300" : "text-zinc-600";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-semibold tracking-[0.18em] uppercase ${
          tone === "light" ? "text-violet-300" : "text-violet-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${bodyColor}`}>
        {description}
      </p>
    </div>
  );
}
