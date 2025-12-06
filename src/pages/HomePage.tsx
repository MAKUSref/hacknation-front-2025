import { useHealthCheck } from "@/hooks/useHealthCheck";
import { Navbar } from "@/components/molecules/Navbar";

export const HomePage = () => {
  useHealthCheck();

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-15 mt-20 text-center">
        <h1>
          Uczestnicz w procesie tworzenia
          <span className="bg-red-400 inline-flex pb-3 px-2">prawa</span> w
          Polsce
        </h1>

        <h5 className="max-w-[900px]">
          Dołącz do otwartego procesu konsultacji i miej realny wpływ na
          przepisy, które kształtują nasze codzienne życie.
        </h5>
        <button className="p-4 border-black border-2 rounded-4xl flex flex-row items-center gap-1 hover:cursor-pointer text-2xl">
          Przejrzyj dokumenty legislacyjne
        </button>
      </section>
    </>
  );
};
