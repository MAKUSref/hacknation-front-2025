import { useId, useMemo } from "react";
import { useParams } from "react-router";
import { Collapse, type CollapseProps } from "antd";
import { Timeline } from "@/components/molecules/Timeline";
import {
  useGetLegislationQuery,
  useGetLegislationStepsQuery,
  useGetCommentsListQuery,
} from "@/api/baseApi/legislation/legislationApi";
import { Tag } from "@/components/atoms/Tag";
import { SubscribeBtn } from "@/components/molecules/SubscribeBtn";
import { CommentForm } from "@/components/molecules/CommentForm";
import { Loader } from "@/components/molecules/Loader";
import {
  StepPlace,
  type ILegislationStep,
  type ILegislationStepsInfo,
} from "@/api/baseApi/legislation/types";

const text = `
  test
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <p className="font-semibold">Jaki problem jest rozwiązywany?</p>,
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <p className="font-semibold">
        Rekomendowane rozwiązanie, w tym planowane narzędzia interwencji i
        oczekiwany efekt
      </p>
    ),
    children: <p>{text}</p>,
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const mapTitle = (
  dataset: ILegislationStep[],
  stepsInfo: ILegislationStepsInfo[]
) => {
  return dataset.map((step) => {
    const stepInfo = stepsInfo.find(
      (info) => info.index === parseInt(step.type)
    );
    return {
      ...step,
      place: stepInfo ? stepInfo.place : undefined,
      description: stepInfo ? stepInfo.description : undefined,
      type: stepInfo ? stepInfo.name : step.type,
    };
  });
};

export const ProcessPage = () => {
  const keyId = useId();

  const { id } = useParams<{ id: string }>();

  const { data: legislation } = useGetLegislationQuery(id || "");
  const { data: steps } = useGetLegislationStepsQuery();
  const { data: comments } = useGetCommentsListQuery({ projectId: id || "" });

  const mappedItems = useMemo(() => {
    if (!legislation || !steps) return [];
    return mapTitle(legislation.steps, steps);
  }, [legislation, steps]);

  const isFilled = useMemo(
    () =>
      comments?.some(
        (comment) => comment.userId._id === "693495ef5f2b4db734263314"
      ),
    [comments]
  );

  const isOpinionFormAvailable = useMemo(
    () =>
      mappedItems.find(
        (item) =>
          item.isActive && item.place === StepPlace.PRE_SEJM && !isFilled
      ),
    [mappedItems, isFilled]
  );

  if (!legislation || !steps) {
    return <Loader />;
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
          <h3 className="font-bold mt-4 mb-6 leading-tight">
            {legislation.title}
          </h3>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Pełen tytuł</span>:{" "}
            {legislation.description}
          </p>
        </section>
        <section className="badges flex flex-row gap-2 my-4">
          {legislation.tags?.map((tag) => (
            <Tag key={`${keyId}-${tag}`}>{tag}</Tag>
          ))}
        </section>
        <section className="mt-6 mb-10">
          <Collapse accordion ghost items={items} />
        </section>
        <section className="my-6">
          <Timeline items={mappedItems} />
        </section>
        <section>
          <p className="text-lg mb-2">Załączniki do projektu:</p>
          <div className="rounded-4xl bg-gray-300 w-75 h-4"></div>
          <div className="rounded-4xl bg-gray-300 w-75 h-4 my-3"></div>
          <div className="rounded-4xl bg-gray-300 w-75 h-4"></div>
        </section>
      </section>
      <section className="right w-100">
        <SubscribeBtn processId={legislation._id} />
        <div className="flex flex-col gap-2 mt-10">
          <h5 className="font-medium text-sm">Podziel się swoją opinią</h5>
          <p className="text-gray-500 text-sm">
            Twoja opinia jest ważna — pomoże w tworzeniu przepisów, które są
            bardziej przejrzyste, skuteczne i dostosowane do potrzeb
            społeczeństwa.
          </p>
          <div className="flex flex-row gap-4 items-center mt-5">
            <div className="font-medium text-5xl">12</div>
            <div className="text-sm text-gray-600 max-w-[200px]">
              Liczba osób, które{" "}
              {isOpinionFormAvailable ? "" : "w czasie trwania konsultacji"}{" "}
              podzieliły się swoją opinią
            </div>
          </div>
          {isOpinionFormAvailable && (
            <CommentForm processId={legislation._id} />
          )}
          {isFilled && (
            <p className="mt-10">
              Już wypełniłeś ten formularz. Dziękujemy za twoją opinię!
            </p>
          )}
        </div>
      </section>
    </section>
  );
};
