import { useMakeQueryMutation } from "@/api/baseApi/AI/AIApi";
import { useState } from "react";

export function QueryForm({ processId }: { processId: string }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [makeQuery] = useMakeQueryMutation();
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = () => {
    if (query.trim() === "") return;

    makeQuery({
      legislationProjectId: processId,
      prompt: query,
    }).then((res) => {
      setResponse(res.data?.text || null);
      setQuery("");
    });
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 bg-white rounded-xl p-6 w-96 shadow-2xl z-50 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Zapytaj AI</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          
          <div className="px-5 py-3 text-sm min-h-[100px] max-h-[200px] overflow-y-auto border border-gray-200 rounded-xl mb-4 bg-gray-50">
            {response || "Odpowiedź pojawi się tutaj..."}
          </div>
          
          <input
            className="border-black border-2 rounded-xl px-5 py-3 text-sm w-full mb-4"
            placeholder="Masz jakieś pytanie?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
          
          <button
            onClick={handleSubmit}
            className="bg-red-400 text-white p-3 rounded-xl font-bold hover:bg-red-500 hover:cursor-pointer w-full transition-all"
          >
            Zapytaj AI
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-red-400 text-white p-4 rounded-full shadow-lg hover:bg-red-500 transition-all z-50 w-14 h-14 flex items-center justify-center font-bold text-xl"
        aria-label="Toggle AI Chat"
      >
        AI
      </button>
    </>
  );
}
