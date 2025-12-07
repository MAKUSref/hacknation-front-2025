import {
  useGetLegislationListQuery,
  useGetLegislationStepsQuery,
} from "@/api/baseApi/legislation/legislationApi";
import { Table } from "antd";
import { useNavigate } from "react-router";
import { Tag } from "../atoms/Tag";
import dayjs from "dayjs";
import { PATHS } from "@/router/paths";
import { mapTitle } from "@/pages/legislative/ProcessPage";
import type { ILegislationProject } from "@/api/baseApi/legislation/types";

type LegislationWithId = { _id?: string; id?: string };

export function AdminAllDocsTable() {
  const { data } = useGetLegislationListQuery();
  const { data: steps } = useGetLegislationStepsQuery();
  const navigate = useNavigate();

  const mapItem = (item: ILegislationProject) => {
    if (!data || !steps) return [];
    return mapTitle(item.steps, steps);
  };

  return (
    <Table
      onRow={(record) => ({
        onClick: () => {
          navigate(PATHS.ADMIN.UPDATE_PROCESS.replace(":id", record.id));
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
        data?.map((item, i) => {
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
  );
}
