"use client";
import { Suspense } from "react";
import ConfirmContent from "./ConfirmContent";

export default function ConfirmPageWrapper() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <ConfirmContent />
    </Suspense>
  );
}
