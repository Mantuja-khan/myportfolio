export function SkillCircle({
  name,
  level,
  icon,
  image,
}: {
  name: string;
  level: number;
  icon?: string;
  image?: string;
}) {
  return (
    <div className="group flex flex-col items-center gap-1.5 py-1.5 sm:gap-3 sm:py-3">
      <div className="relative flex h-22 w-22 items-center justify-center xs:h-26 xs:w-26 sm:h-32 sm:w-32">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full -rotate-90"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="4" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray={`${level} 100`}
          />
        </svg>

        {/* Inner Circle: displays technology image only (name removed from inside circle) */}
        <span
          title={name}
          className="flex h-18 w-18 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-300 group-hover:scale-105 xs:h-21 xs:w-21 sm:h-24 sm:w-24 p-3.5"
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-xs"
              loading="lazy"
            />
          ) : icon ? (
            <span className="text-xl font-bold">{icon}</span>
          ) : (
            <span className="text-[11px] font-semibold">{name}</span>
          )}
        </span>
      </div>

      <p className="text-base font-semibold text-primary sm:text-xl">
        {level}
        <span className="ml-0.5 text-[10px] sm:text-xs">%</span>
      </p>
    </div>
  );
}
