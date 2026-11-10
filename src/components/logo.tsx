type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "light" }: LogoProps) {
  const word = tone === "light" ? "text-white" : "text-zinc-950";

  return (
    <a href="#top" className="inline-flex items-center gap-2.5 rounded-lg">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600 text-white shadow-sm">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
        >
          <path
            d="M5 17V7l7 6 7-6v10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`text-lg font-semibold tracking-tight ${word}`}>
        Metri<span className="text-violet-500">X</span>a
      </span>
    </a>
  );
}
