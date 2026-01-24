import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ open, onClose, title, children, className = "" }) => {
  const [mounted, setMounted] = useState(open);
  const [closing, setClosing] = useState(false);

  // Montar/desmontar con animación
  useEffect(() => {
    if (open) {
      setMounted(true);
      setClosing(false);

      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prevOverflow;
      };
    } else if (mounted) {
      setClosing(true);
      const t = setTimeout(() => {
        setMounted(false);
        setClosing(false);
      }, 220); // debe coincidir con CSS
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  // Cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    // dispara animación de cierre
    setClosing(true);
    setTimeout(() => onClose?.(), 10);
  };

  if (!mounted) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div
      className={`modal-backdrop ${open && !closing ? "is-open" : ""} ${closing ? "is-closing" : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={`modal-card ${className} ${open && !closing ? "is-open" : ""} ${closing ? "is-closing" : ""}`}>
        <div className="modal-header">
          {title ? <h3 className="modal-title">{title}</h3> : <div />}
          <button className="modal-close" onClick={handleClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

