import { Table } from "antd";

export function LatestDocs() {
  return (
    <div className="flex flex-col gap-5">
      <h6>Ostatnio uaktualniane dokumenty</h6>
      <Table
        className="[&_th]:bg-white!"
        columns={[
        {
          title: "Skrócony tytuł",
          dataIndex: "skrocony-tytul",
          key: "skrocony-tytul"
        },
        {
          title: "Kategorie",
          dataIndex: "kategorie",
          key: "kategorie"
        },
        {
          title: "Wnioskodawca",
          dataIndex: "wnioskodawca",
          key: "wnioskodawca"
        },
        {
          title: "Modyfikacja",
          dataIndex: "modyfikacja",
          key: "modyfikacja"
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status"
        }
      ]} />
    </div>
  );
}
