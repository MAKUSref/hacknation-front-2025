import { AdminAllDocsTable } from "@/components/organisms/AdminAllDocsTable";
import { ProcessesFilterForm } from "@/components/organisms/forms/ProcessesFilterForm";
import { Input } from "antd";

export function AdminDashboardPage() {
  return (
    <div className="mt-20">
      <h4>Zaktualizuj dokumenty legislacyjne</h4>
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-3">
          <ProcessesFilterForm />
        </div>
        <div className="col-span-9 flex flex-col gap-4">
          <div>
            <Input
              className="w-full"
              placeholder="Wpisz numer dokumentu lub jego tytuł"
            />
          </div>
          <div>
            <AdminAllDocsTable />
          </div>
        </div>
      </div>
    </div>
  );
}
