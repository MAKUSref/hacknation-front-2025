import {
  useGetLegislationListQuery,
  useGetLegislationStepsQuery,
} from "@/api/baseApi/legislation/legislationApi";
import { useMemo } from "react";
import { Table } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { PATHS } from "@/router/paths";
import { Tag } from "../atoms/Tag";
import { mapTitle } from "@/pages/legislative/ProcessPage";
import type { ILegislationProject } from "@/api/baseApi/legislation/types";
import { useAppSelector } from "@/redux/hooks";

type LegislationWithId = { _id?: string; id?: string };

export function LatestDocsTable() {
  const { data, isLoading } = useGetLegislationListQuery();
  const { data: steps } = useGetLegislationStepsQuery();

  const navigate = useNavigate();
  const selectedFields = useAppSelector(
    (state) => state.session.selectedFields
  );

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (!selectedFields) return data;

    return data.filter((item) => {
      return item.tags?.some((tag) => selectedFields.includes(tag));
    });
  }, [data, selectedFields]);

  const mapItem = (item: ILegislationProject) => {
    if (!data || !steps) return [];
    return mapTitle(item.steps, steps);
  };

  return (
    <div className="flex flex-col gap-5">
      <h6>Ostatnio uaktualniane dokumenty</h6>
      <Table
        loading={isLoading}
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            navigate(PATHS.PROCESS.replace(":id", record.id));
          },
          style: { cursor: "pointer" },
        })}
        columns={[
          {
            title: "Skrócony tytuł",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Kategorie",
            dataIndex: "categories",
            key: "categories",
          },
          {
            title: "Wnioskodawca",
            dataIndex: "applicant",
            key: "applicant",
          },
          {
            title: "Modyfikacja",
            dataIndex: "modification",
            key: "modification",
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
          },
        ]}
        dataSource={
          filteredData.map((item, i) => {
            const itemWithId = item as LegislationWithId;
            return {
              key: i,
              id: itemWithId._id || itemWithId.id || "",
              title: item.title,
              categories: item.tags?.join(", ") || "",
              applicant: item.applicant,
              modification: dayjs(item.updatedAt).format("DD.MM.YYYY"),
              status: <Tag>{mapItem(item).at(-1)?.type || ""}</Tag>,
            };
          }) || []
        }
      />
    </div>
  );
}
