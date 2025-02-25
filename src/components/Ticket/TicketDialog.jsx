import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";

export const TicketDialog = ({ name, image, show, isOpen, onOpenChange }) => {
  const ticketRef = useRef(null);
  const canvasRef = useRef(null);

  const handleDownloadTicket = async () => {
    if (!ticketRef.current) return;

    const canvas = await html2canvas(ticketRef.current);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "ingresso-fasc-2077.png";
    link.click();
  };

  useEffect(() => {
    if (!image || !isOpen) return;

    setTimeout(() => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.moveTo(0.15 * width, 0);
      ctx.lineTo(width, 0);
      ctx.lineTo(width, 0.85 * height);
      ctx.lineTo(0.85 * width, height);
      ctx.lineTo(0, height);
      ctx.lineTo(0, 0.15 * height);
      ctx.closePath();
      ctx.clip();

      const img = new Image();
      img.src = image;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);

        ctx.strokeStyle = "#a855f7";
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(0.15 * width, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width, 0.85 * height);
        ctx.lineTo(0.85 * width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(0, 0.15 * height);
        ctx.closePath();
        ctx.stroke();
      };

      return () => {
        img.onload = null;
      };
    }, 100);
  }, [image, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-3/4 h-fit bg-zinc-300 flex flex-col items-center justify-between p-6">
        <div className="text-black text-center space-y-4">
          <DialogTitle>Seu ingresso para o FASC 2077 está pronto!</DialogTitle>
          <DialogDescription className="text-black text-base">
            Compartilhe nas suas redes para que seus amigos possam curtir com
            você!
          </DialogDescription>
        </div>
        <div
          className="w-2/3 flex flex-col items-center bg-white border-black border-2 rounded-xl font-michroma p-2"
          ref={ticketRef}
        >
          <div className="w-40 h-40 p-1 mt-2 ">
            <canvas ref={canvasRef} className="w-full h-full " />
          </div>
          <div className="text-start p-2">
            <p className="text-purple-500 font-bold">{name}</p>
            <p className="text-purple-500 ">FASC 2077</p>
            <p className="text-purple-500 ">Data: 30/12/2077</p>
            <p className="text-purple-500 ">Horário: 20h</p>
            <p className="text-purple-500 ">
              Show que quero ir: <strong>{show}</strong>
            </p>
          </div>
        </div>

        <button
          className="flex gap-2 bg-purple-500 rounded-lg p-2  text-white"
          onClick={handleDownloadTicket}
        >
          <Download size={24} />
          Baixar ingresso
        </button>
      </DialogContent>
    </Dialog>
  );
};
