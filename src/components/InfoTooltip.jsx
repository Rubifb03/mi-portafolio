import { useState } from "react";

export default function InfoTooltip({ label = "Info", children }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="tooltip"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span aria-label="info" role="img" style={{ cursor: "help" }}>
        💡
      </span>
      {open && (
        <span className="tooltip-bubble" role="tooltip">
          {children ?? label}
        </span>
      )}
    </span>
  );
}
