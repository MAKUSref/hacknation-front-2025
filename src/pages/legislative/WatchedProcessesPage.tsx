import { ProcessesFilterForm } from "@/components/organisms/forms/ProcessesFilterForm";
import { WatchedDocsTable } from "@/components/organisms/WatchedDocsTable";
import { Input } from "antd";

export function WatchedProcessesPage() {
  return (
    <div className="mt-20">
      <h4>Obserwowane dokumenty legislacyjne</h4>
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
            <WatchedDocsTable />
          </div>
        </div>
      </div>
    </div>
  );
}