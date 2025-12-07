import { useGetLegislationListQuery } from "@/api/baseApi/legislation/legislationApi";
import { Table } from "antd";
import { useNavigate } from "react-router";
import { Tag } from "../atoms/Tag";
import dayjs from "dayjs";
import { PATHS } from "@/router/paths";

type LegislationWithId = { _id?: string; id?: string };

export function AllDocsTable() {
  const { data } = useGetLegislationListQuery();
  const navigate = useNavigate();

  return (
    <Table
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
        data?.map((item, i) => {
          const itemWithId = item as LegislationWithId;
          return {
            key: i,
            id: itemWithId._id || itemWithId.id || "",
            title: item.title,
            categories: item.tags?.join(", ") || "",
            applicant: item.applicant,
            modification: dayjs(item.updatedAt).format("DD.MM.YYYY"),
            status: <Tag>{item.steps.at(-1)?.type || ""}</Tag>,
          };
        }) || []
      }
    />
  );
}
