export function SkillCircle({ name, level, icon }: { name: string; level: number; icon?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-3">
      <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
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
        <span className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-accent text-primary">
          {icon && <span className="mb-1 text-xl font-bold">{icon}</span>}
          <span className="text-xs font-semibold">{name}</span>
        </span>
      </div>
      <p className="text-xl font-semibold text-primary">
        {level}
        <span className="ml-0.5 text-xs">%</span>
      </p>
    </div>
  );
}
