import { useEffect, useState } from "react";

export default function TypewriterText({
  text = "Coming soon",
  typingSpeed = 90,
  holdMs = 1400,
  deletingSpeed = 45,
  pauseMs = 500,
}) {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(text);
      return;
    }

    let timeout;

    if (phase === "typing") {
      if (display.length < text.length) {
        timeout = setTimeout(
          () => setDisplay(text.slice(0, display.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (display.length > 0) {
        timeout = setTimeout(
          () => setDisplay(display.slice(0, -1)),
          deletingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("typing"), pauseMs);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, text, typingSpeed, holdMs, deletingSpeed, pauseMs]);

  return (
    <span className="typewriter">
      {display}
      <span className="typewriter__cursor" aria-hidden="true">|</span>
    </span>
  );
}
