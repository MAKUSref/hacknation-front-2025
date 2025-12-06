import { useHealthCheck } from "@/hooks/useHealthCheck";
import { Navbar } from "@/components/molecules/Navbar";
import { Btn } from "@/components/atoms/Button";
import { LatestDocs } from "@/components/organisms/LatestDocs";

export const HomePage = () => {
  useHealthCheck();

  return (
    <>
      <Navbar />
      <header className="flex flex-col items-center gap-15 mt-20 text-center md:min-h-[500px] justify-end">
        <h1 className="max-w-[1000px]">
          Uczestnicz w procesie tworzenia
          <span className="bg-red-400 inline-flex pb-3 px-2">prawa</span> w
          Polsce
        </h1>

        <h5 className="max-w-[900px]">
          Dołącz do otwartego procesu konsultacji i miej realny wpływ na
          przepisy, które kształtują nasze codzienne życie.
        </h5>
        <div className="flex flex-col gap-1">
          <Btn className="md:min-w-[420px]">Ustaw Zainteresowania</Btn>
          <p className="text-primary underline cursor-pointer p-2 m-2">
            Przejrzyj dokumenty legislacyjne
          </p>
        </div>
      </header>
      <section className="mt-20">
        <LatestDocs />
      </section>
    </>
  );
};
