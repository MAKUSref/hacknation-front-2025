import {
  useAddProjectToMyWatchListMutation,
  useGetMyWatchProcessesQuery,
  useRemoveProjectFromMyWatchListMutation,
} from "@/api/baseApi/me/meApi";
import { Btn } from "../atoms/Button";
import { useMemo } from "react";
import bell from "@/assets/bell.svg";
import bellActive from "@/assets/bell-active.svg";

export const SubscribeBtn = ({ processId }: { processId: string }) => {
  const { data: watchedProjects } = useGetMyWatchProcessesQuery();
  const [subscribeProject] = useAddProjectToMyWatchListMutation();
  const [unsubscribeProject] = useRemoveProjectFromMyWatchListMutation();

  const isProcessWatched = useMemo(
    () => watchedProjects?.some((project) => project._id === processId),
    [watchedProjects, processId]
  );

  const handleSubscribeProject = async () => {
    if (!isProcessWatched) {
      await subscribeProject({ projectId: processId });
    } else {
      await unsubscribeProject({ projectId: processId });
    }
  };

  return (
    <Btn
      className="w-100 justify-start gap-3 pl-0 pr-2"
      onClick={handleSubscribeProject}
    >
      <img
        className="ml-5"
        width={20}
        src={isProcessWatched ? bellActive : bell}
        alt="Bell icon"
      />
      {isProcessWatched
        ? "Subskrybujesz ten dokument"
        : "Bądź na bieżąco z pracami"}
    </Btn>
  );
};
