import { Checkbox, Input } from "antd";

export function ProcessesFilterForm() {
  return (
    <div className="border border-[#e9e7e7] rounded-md p-5 gap-3 flex flex-col">
      <p className="text-base font-semibold">Rodzaje dokumentu</p>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-normal">Rodzaj dokumentu</p>
        <Input placeholder="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-normal">Etap</p>
        <Input placeholder="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-normal">Data utworzenia (od - do)</p>
        <Input placeholder="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-normal">Wnioskodawca</p>
        <Input placeholder="" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <Checkbox id="1" />
          <label htmlFor="1" className="text-xs font-normal py-0.5">
            Projekt realizuje przepisy prawa Unii Europejskiej
          </label>
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id="2" />
          <label htmlFor="2" className="text-xs font-normal py-0.5">
            Projekt wykonuje orzeczenie trybunału Konstytucyjnego
          </label>
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id="3" />
          <label htmlFor="3" className="text-xs font-normal py-0.5">
            Projekt opracowany na podstawie założeń projektu ustaw
          </label>
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id="4" />
          <label htmlFor="4" className="text-xs font-normal py-0.5">
            Projekt opracowany w trybie odrębnym
          </label>
        </div>
      </div>
    </div>
  );
}
