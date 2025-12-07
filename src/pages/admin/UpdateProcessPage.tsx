import { Alert, Button, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useGetLegislationQuery } from "@/api/baseApi/legislation/legislationApi";
import { useNavigate, useParams } from "react-router";
import { PATHS } from "@/router/paths";
import { Btn } from "@/components/atoms/Button";

export function UpdateProcessPage() {
  const { id } = useParams<{ id: string }>();
  const { data: legislation, isError } = useGetLegislationQuery(id || "id");
  const navigate = useNavigate();

  if (isError) {
    navigate(PATHS.ADMIN.ADD_PROCESSES);
  }

  return (
    <div className="my-10">
      <h4>Zaktualizuj dokument</h4>
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
            Numer wykazu:{" "}
            <Input className="max-w-24" size="small" defaultValue={id} />
          </p>
          <p className="text-sm">
            Wnioskodawca:{" "}
            <Input
              className="max-w-48"
              size="small"
              defaultValue={legislation?.applicant}
            />
          </p>
          <p className="text-sm">
            Data utworzenia:{" "}
            <Input
              className="max-w-24"
              size="small"
              defaultValue={new Date(
                legislation?.createdAt ?? ""
              ).toLocaleDateString()}
            />
          </p>
        </div>
        <div className="col-span-8 flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Tytuł ustawy</p>
            <textarea
              className="border-[#D2D2D2] border rounded-xl px-5 py-3 text-sm w-full"
              placeholder="Pełny tytuł projektu ustawy"
              rows={6}
              defaultValue={legislation?.title}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Skrócony tytuł ustawy</p>
            <textarea
              className="border-[#D2D2D2] border rounded-xl px-5 py-3 text-sm w-full"
              placeholder="Pełny tytuł projektu ustawy"
              rows={2}
              defaultValue={legislation?.description}
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
              defaultValue={``}
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
        </div>
        <div className="col-span-4">
          <UpdateProcessPage.CommentSection />
        </div>

        <div className="my-5 col-span-8">
          <Btn className="ml-auto">Aktualizuj dokument</Btn>
        </div>
      </div>
    </div>
  );
}

UpdateProcessPage.CommentSection = function CommentSection() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h5 className="font-medium text-lg">Opinie na temat ustawy</h5>
        <p className="text-gray-500 text-sm">
          Twoja opinia jest ważna — pomoże w tworzeniu przepisów, które są
          bardziej przejrzyste, skuteczne i dostosowane do potrzeb
          społeczeństwa.
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center mt-5 py-2">
        <div className="font-medium text-5xl">2</div>
        <div className="text-sm text-gray-600 max-w-[200px]">
          Liczba osób, które podzieliły się swoją opinią
        </div>
      </div>
      <div className="border-b border-black py-5 flex flex-col gap-3">
        <p className="text-sm">
          Jestem za zmianami uniemożliwiającymi przejmowanie gmin wiejskich
          przez gminy miejskie na dotychczasowych zasadach.
        </p>
        <p className="italic text-right text-sm">Anna Bryłka</p>
      </div>
      <div className="border-b border-black py-5 flex flex-col gap-3">
        <p className="text-sm">
          Uważam, że ustawa jest potrzebna, ponieważ rozwój pojazdów
          autonomicznych to ważny krok w nowoczesnym transporcie. Wprowadzenie
          jasnych przepisów pozwoli bezpiecznie testować takie pojazdy w Polsce.
          Projekt jest dobrze przygotowany, choć warto zadbać o dodatkowe
          szkolenia dla służb i kierowców w zakresie postępowania z pojazdami
          autonomicznymi oraz o większy nadzór nad bezpieczeństwem ruchu.
        </p>
        <p className="italic text-right text-sm">Anna Lewandowska</p>
      </div>
    </div>
  );
};
