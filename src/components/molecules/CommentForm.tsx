import { useState } from "react";
import { useAddCommentMutation } from "@/api/baseApi/legislation/legislationApi";

export function CommentForm({ processId }: { processId: string }) {
  const [comment, setComment] = useState("");

  const [addComment] = useAddCommentMutation();

  const handleSubmit = () => {
    if (comment.trim() === "") return;

    addComment({
      projectId: processId,
      content: comment,
      userId: "693495ef5f2b4db734263314",
    }).then(() => {
      setComment("");
      // alert
      console.log("dodane");
    });
  };

  return (
    <>
      <textarea
        className="border-black border-2 rounded-xl px-5 py-3 mt-5 text-sm"
        placeholder="Co sądzisz o projekcie?"
        rows={8}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="bg-red-400 text-white p-3 rounded-4xl font-bold w-100 hover:cursor-pointer mt-5"
      >
        Wyślij swoją uwagę
      </button>
    </>
  );
}
