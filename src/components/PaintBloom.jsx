import "./PaintBloom.css";

// The signature moment: a slow, blurred bloom of Marily's own palette,
// hinting at the bold color work without competing with the type.
export default function PaintBloom() {
  return (
    <div className="bloom" aria-hidden="true">
      <span className="bloom__shape bloom__shape--1" />
      <span className="bloom__shape bloom__shape--2" />
      <span className="bloom__shape bloom__shape--3" />
      <span className="bloom__shape bloom__shape--4" />
    </div>
  );
}
