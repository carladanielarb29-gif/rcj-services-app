import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import Confetti from "react-confetti";

interface DialogDefaultProps {
  open: boolean;
  handler: () => void;
}

export function DialogDefault({ open, handler }: DialogDefaultProps) {

  return (
    <Dialog
      open={open}
      handler={handler}
      size="sm"
      className="bg-green-50 border-2 border-green-400 shadow-xl rounded-xl overflow-hidden"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder=""
    >
      {/* 🎉 Confetti animado */}
    <Confetti recycle={false} numberOfPieces={400} />

      {/* Header */}
      <DialogHeader
        className="flex items-center text-center gap-2 text-green-700 font-bold"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div>¡Tu solicitud de cotización fue enviada exitosamente!</div>
       
      </DialogHeader>

      {/* Body */}
      <DialogBody
        className="text-green-700 font-medium mt-[-10px]"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Uno de nuestros asesores se pondrá en contacto contigo (Nuestro tiempo de respuesta suele ser de 1-2 días hábiles).
      </DialogBody>
    </Dialog>
  );
}
