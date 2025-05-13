"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog?.open) {
      dialog?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      className="flex h-screen w-screen items-center justify-center bg-black/80 text-white"
      ref={dialogRef}
      onClose={onDismiss}
    >
      {children}
      {/* <button onClick={onDismiss} className="close-button" /> */}
    </dialog>,
    document.getElementById("modal-root")! as HTMLDivElement,
  );
}
