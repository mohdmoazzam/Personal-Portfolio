import React, { ClipboardEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiSend, FiShield, FiX } from "react-icons/fi";

const CODE_LENGTH = 6;
const emptyDigits = () => Array<string>(CODE_LENGTH).fill("");

interface OtpModalProps {
  email: string;
  busy: boolean;
  resendIn: number;
  /** Resolves to true when the code was accepted. */
  onVerify: (code: string) => Promise<boolean>;
  onResend: () => void;
  onChangeEmail: () => void;
  onClose: () => void;
}

const OtpModal = ({
  email,
  busy,
  resendIn,
  onVerify,
  onResend,
  onChangeEmail,
  onClose,
}: OtpModalProps) => {
  const [digits, setDigits] = useState(emptyDigits);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const code = digits.join("");
  const isComplete = code.length === CODE_LENGTH;

  const focusBox = (index: number) =>
    inputs.current[Math.max(0, Math.min(CODE_LENGTH - 1, index))]?.focus();

  useEffect(() => {
    focusBox(0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && !busy) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [busy, onClose]);

  const submit = async (value: string) => {
    if (busy || value.length !== CODE_LENGTH) return;
    if (!(await onVerify(value))) {
      setDigits(emptyDigits());
      focusBox(0);
    }
  };

  // Writes digits starting at `start`, then auto-submits once every box is filled.
  const fillFrom = (start: number, incoming: string) => {
    const next = [...digits];
    incoming
      .slice(0, CODE_LENGTH - start)
      .split("")
      .forEach((digit, offset) => (next[start + offset] = digit));
    setDigits(next);
    focusBox(start + incoming.length);
    submit(next.join(""));
  };

  const handleChange = (index: number, raw: string) => {
    const value = raw.replace(/\D/g, "");
    if (!value) {
      setDigits((prev) => prev.map((digit, i) => (i === index ? "" : digit)));
      return;
    }
    // A long value comes from autofill; a short one is a keystroke replacing the box.
    fillFrom(index, value.length > 2 ? value : value.slice(-1));
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      e.preventDefault();
      setDigits((prev) => prev.map((digit, i) => (i === index - 1 ? "" : digit)));
      focusBox(index - 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusBox(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      focusBox(index + 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      submit(code);
    }
  };

  const handlePaste = (index: number, e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pasted) fillFrom(index, pasted);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !busy) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="otp-title"
        className="relative w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-zinc-900 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          disabled={busy}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-50 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
        >
          <FiX />
        </button>

        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-xl text-white shadow-lg shadow-indigo-500/25">
          <FiShield />
        </span>
        <h3 id="otp-title" className="mt-4 font-display text-xl font-bold text-zinc-900 dark:text-white">
          Verify your email
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Enter the 6-digit code sent to{" "}
          <span className="break-all font-medium text-zinc-900 dark:text-white">{email}</span>
        </p>

        <div className="mt-6 grid grid-cols-6 gap-2 sm:gap-3">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              autoComplete={index === 0 ? "one-time-code" : "off"}
              aria-label={`Digit ${index + 1}`}
              className="input h-12 px-0 text-center font-mono text-xl font-semibold sm:h-14 sm:text-2xl"
              value={digit}
              disabled={busy}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={(e) => handlePaste(index, e)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => submit(code)}
          disabled={busy || !isComplete}
          className="btn-primary mt-6 w-full"
        >
          {busy ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Please wait...
            </>
          ) : (
            <>
              Verify & send <FiSend />
            </>
          )}
        </button>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm">
          <button
            type="button"
            onClick={onResend}
            disabled={busy || resendIn > 0}
            className="font-medium text-indigo-600 hover:underline disabled:cursor-not-allowed disabled:text-zinc-400 disabled:no-underline dark:text-indigo-300 dark:disabled:text-zinc-500"
          >
            {resendIn > 0 ? `Resend code in ${resendIn}s` : "Resend code"}
          </button>
          <button
            type="button"
            onClick={onChangeEmail}
            disabled={busy}
            className="text-zinc-500 hover:underline disabled:opacity-50 dark:text-zinc-400"
          >
            Use a different email
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default OtpModal;
