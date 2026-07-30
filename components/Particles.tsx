// Fixed values, not random, so server and client markup match.
const DOTS = [
  { left: 6, duration: 13, delay: 0 },
  { left: 14, duration: 9, delay: 2.5 },
  { left: 21, duration: 15, delay: 1.2 },
  { left: 29, duration: 11, delay: 4.1 },
  { left: 36, duration: 8, delay: 0.6 },
  { left: 43, duration: 14, delay: 3.4 },
  { left: 50, duration: 10, delay: 6.2 },
  { left: 57, duration: 12, delay: 1.8 },
  { left: 64, duration: 9, delay: 5.5 },
  { left: 71, duration: 15, delay: 2.2 },
  { left: 78, duration: 11, delay: 7.1 },
  { left: 85, duration: 13, delay: 3 },
  { left: 92, duration: 8, delay: 4.8 },
  { left: 97, duration: 12, delay: 0.9 },
];

/** Gold motes drifting upward on the dark hero. CSS only. */
export default function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {DOTS.map((dot, i) => (
        <i
          key={i}
          style={{
            left: `${dot.left}%`,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
