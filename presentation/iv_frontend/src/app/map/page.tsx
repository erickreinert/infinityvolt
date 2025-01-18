'use client';

import Navbar from '@/components/ui/navbar';

export default function MapPage() {
  return (
    <div className="text-white flex flex-col flex-1">
      <Navbar />
      <div className="grid grid-cols-4 flex-1 justify-between items-center">
        <div className="h-full p-3">
          <h3 className="font-bold text-2xl">
            Exibindo eletropostos próximos à:
          </h3>
          <p className="underline">Avenida Paulista, 1106. São Paulo - SP</p>
        </div>
        <iframe
          className="col-span-3"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7314.253819644732!2d-46.65323265498726!3d-23.563885072298643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1seletro%20posto!5e0!3m2!1spt-BR!2sbr!4v1737226670082!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
