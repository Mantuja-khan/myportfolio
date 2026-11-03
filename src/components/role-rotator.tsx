const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Web Developer",
  "SEO Expert",
  "UI/UX Designer",
  "Frontend Developer",
] as const;

export function RoleRotator() {
  return (
    <div className="role-rotator mt-3" aria-label={roles.join(", ")}>
      <span aria-hidden className="role-rotator-arrow">
        →
      </span>
      <span className="role-rotator-window" aria-hidden>
        <span className="role-rotator-track">
          {[...roles, roles[0]].map((role, index) => (
            <span className="role-rotator-item" key={`${role}-${index}`}>
              {role}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}
