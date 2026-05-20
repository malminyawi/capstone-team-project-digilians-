import style from "./Input.module.css";

export default function Input({children,className="",placeholder}) {
  return (
    <>
      <div className={`input-group ${className}`}>
      <input
        type="text"
        className={`form-control py-2 rounded-3 position-relative ${style.input}`}
        aria-label="Text input with dropdown button"
        placeholder={placeholder}
      />
      {children}
    </div>
    </>
  );
}
