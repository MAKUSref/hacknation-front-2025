import { Alert, Button, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Btn } from "@/components/atoms/Button";
// import { useState } from "react";
// import {
//   LegislationTag,
//   type ILegislationProject,
//   type ILegislationStep,
// } from "@/api/baseApi/legislation/types";

export function AddProcessPage() {
  // const [processInfo, setProcessInfo] = useState<ILegislationProject>();

  // const handleFileChange = () => {
  //   setProcessInfo({
  //     _id: "1hvbhb2",
  //     title:
  //       "Projekt założeń projektu ustawy o zdrowiu dzieci i młodzieży w wieku szkolnym",
  //     applicant: "Minister Zdrowia",
  //     description:
  //       "Projekt ustawy mający na celu poprawę zdrowia dzieci i młodzieży poprzez wprowadzenie obowiązkowych badań profilaktycznych oraz programów edukacyjnych w szkołach.",
  //     steps: [] as ILegislationStep[],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     tags: [LegislationTag.ZDROWIE],
  //   });
  // };

  return (
    <div className="my-10">
      <h4>Dodaj dokument</h4>
      <div className="grid grid-cols-12 gap-x-10 gap-y-3 mt-6">
        <div className="col-span-8 flex flex-col gap-2 mb-4">
          <Alert
            title="Pamiętaj o załączeniu niezbędnych plików (Pozwoli to na automatyczne uzupełnienie niektórych pól)."
            type="warning"
            showIcon
          />
          <Upload>
            <Button icon={<UploadOutlined />}>Załącz pliki</Button>
          </Upload>
        </div>
        <div className="col-span-8 flex flex-col gap-1">
          <p className="text-sm">
            Numer wykazu: <Input className="max-w-24" size="small" />
          </p>
          <p className="text-sm">
            Wnioskodawca: <Input className="max-w-48" size="small" />
          </p>
          <p className="text-sm">
            Data utworzenia: <Input className="max-w-24" size="small" />
          </p>
        </div>
        <div className="col-span-8 flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Tytuł ustawy</p>
            <textarea
              className="border-[#D2D2D2] border rounded-xl px-5 py-3 text-sm w-full"
              placeholder="Pełny tytuł projektu ustawy"
              rows={6}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Skrócony tytuł ustawy</p>
            <textarea
              className="border-[#D2D2D2] border rounded-xl px-5 py-3 text-sm w-full"
              placeholder="Pełny tytuł projektu ustawy"
              rows={2}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Kategorie</p>
            <Select
              mode="multiple"
              className="w-full"
              placeholder="Wybierz kategorie"
              options={[
                { value: "Gospodarka", label: "Gospodarka" },
                { value: "Edukacja", label: "Edukacja" },
                { value: "Zdrowie", label: "Zdrowie" },
                { value: "Transport", label: "Transport" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Aktualny status</p>
            <Select
              className="w-full"
              placeholder="Wybierz status"
              options={[
                { value: "W przygotowaniu", label: "W przygotowaniu" },
                { value: "W konsultacjach", label: "W konsultacjach" },
                { value: "Przyjęty", label: "Przyjęty" },
                { value: "Odrzucony", label: "Odrzucony" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Jaki problem jest rozwiązywany?</p>
            <textarea
              className="border-[#D2D2D2] border rounded-xl px-5 py-3 text-sm w-full"
              placeholder=""
              rows={6}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">
              Rekomendowane rozwiązanie, w tym planowane narzędzia interwencji,
              i oczekiwany efekt
            </p>
            <textarea
              className="border-[#D2D2D2] border rounded-xl px-5 py-3 text-sm w-full"
              placeholder=""
              rows={6}
            ></textarea>
          </div>
          <div className="my-5 col-span-8">
            <Btn className="ml-auto">Dodaj dokument</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
