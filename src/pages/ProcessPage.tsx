import { useId } from "react";
import { useParams } from "react-router";
import { Collapse, type CollapseProps } from "antd";
import { Timeline } from "@/components/molecules/Timeline";
import bell from "@/assets/bell.svg";
import { useGetLegislationQuery } from "@/api/baseApi/legislation/legislationApi";

// const timelineData = [
//   {
//     id: "1",
//     date: "05-12-2025",
//     title: "Ustawa przedstawiona prezydentowi do podpisu",
//     description:
//       "Prezydent ma 21 dni na podpisanie ustawy, skierowanie jej do trybunału konstytucyjnego lub odmowy podpisu",
//     tag: "Prezydent",
//     icon: "rocket" as const,
//   },
//   {
//     id: "2",
//     date: "02-11-2025",
//     title: "Ustawa przyjęta w trzecim głosowaniu",
//     tag: "Sejm",
//     icon: "moon" as const,
//   },
//   {
//     id: "3",
//     date: "02-11-2025",
//     title: "Ustawa przyjęta w trzecim głosowaniu",
//     icon: "moon-gray" as const,
//   },
// ];

const text = `
  test
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <p className="font-bold text-lg">Jaki problem jest rozwiązywany?</p>,
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <p className="font-bold text-lg">
        Rekomendowane rozwiązanie, w tym planowane narzędzia interwencji i
        oczekiwany efekt
      </p>
    ),
    children: <p>{text}</p>,
  },
];

export const ProcessPage = () => {
  const keyId = useId();

  const { id } = useParams<{ id: string }>();

  const { data: legislation } = useGetLegislationQuery(id || "");

  if (!legislation) {
    return <div>Ładowanie danych legislacyjnych...</div>;
  }

  return (
    <section className="flex gap-10 p-6 mt-10">
      <section className="left w-3/4">
        <section className="info">
          <p className="text-sm">Numer wykazu: {id}</p>
          <p className="text-sm">Wnioskodawca: {legislation.applicant}</p>
          <p className="text-sm">
            Data utworzenia:{" "}
            {new Date(legislation.createdAt).toLocaleDateString()}
          </p>
          <h3 className="font-bold my-10">{legislation.title}</h3>
          <p className="text-sm text-gray-400">
            <span className="font-bold">Pełen tytuł</span>:{" "}
            {legislation.description}
          </p>
        </section>
        <section className="badges flex flex-row gap-4 my-10">
          {legislation.tags?.map((tag) => (
            <div className="bg-gray-200 p-2 rounded-lg" key={`${keyId}-${tag}`}>
              {tag}
            </div>
          ))}
        </section>
        <section className="my-12">
          <Collapse accordion ghost items={items} defaultActiveKey={["1"]} />
        </section>
        <section className="my-12">
          <Timeline items={legislation.steps} />
        </section>
        <section>
          <p className="text-lg mb-2">Załączniki do projektu:</p>
          <div className="rounded-4xl bg-gray-300 w-75 h-4"></div>
          <div className="rounded-4xl bg-gray-300 w-75 h-4 my-3"></div>
          <div className="rounded-4xl bg-gray-300 w-75 h-4"></div>
        </section>
      </section>
      <section className="right w-100">
        <button className="w-100 bg-[#345865] rounded-4xl p-3 text-white font-bold hover:cursor-pointer flex align-middle gap-3">
          <img className="ml-5" width={20} src={bell} alt="Bell icon" />
          Bądź na bieżąco z pracami
        </button>
        <div className="flex flex-col gap-2 mt-10">
          <h5 className="font-medium">Podziel się swoją opinią</h5>
          <p className="text-gray-600">
            Twoja opinia jest ważna — pomoże w tworzeniu przepisów, które są
            bardziej przejrzyste, skuteczne i dostosowane do potrzeb
            społeczeństwa.
          </p>
          <div className="flex flex-row gap-2 items-center mt-5">
            <div className="font-bold text-5xl">12</div>
            <div className="text-lg/5 text-gray-600">
              Liczba osób, które podzieliły się swoją opinią
            </div>
          </div>
          <textarea
            className="border-black border-2 rounded-xl p-5 mt-5"
            placeholder="Co sądzisz o projekcie?"
            rows={8}
          ></textarea>
          <button className="bg-red-400 text-white p-3 rounded-4xl font-bold w-100 hover:cursor-pointer mt-5">
            Wyślij swoją uwagę
          </button>
        </div>
      </section>
    </section>
  );
};
