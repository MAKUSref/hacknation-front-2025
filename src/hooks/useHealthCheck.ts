import { useHealthCheckQuery } from "@/api/baseApi/baseApi";
import { useLazyStrapiHealthCheckQuery } from "@/api/strapiApi/strapiApi";
import { config } from "@/config/config";
import { useEffect } from "react";

export const useHealthCheck = () => {
  const { data: apiStatus, isError: isApiError } = useHealthCheckQuery();
  const [
    triggerStrapiHealthCheck,
    { data: strapiStatus, isError: isStrapiError },
  ] = useLazyStrapiHealthCheckQuery();

  useEffect(() => {
    if (isApiError) {
      console.error("Backend health check failed.");
    }
    if (apiStatus) {
      console.log(" -- Backend health check status:", apiStatus.status);
    }
  }, [isApiError, apiStatus]);

  useEffect(() => {
    if (config.STRAPI_ON === "false") return;
    if (isStrapiError) {
      console.error("Strapi health check failed.");
    }
    if (strapiStatus) {
      console.log(
        " -- Strapi health check message:",
        strapiStatus.data.message
      );
    }
  }, [isStrapiError, strapiStatus]);

  useEffect(() => {
    if (config.STRAPI_ON === "false") return;
    triggerStrapiHealthCheck();
  }, [triggerStrapiHealthCheck]);

  return { apiStatus, isApiError, strapiStatus, isStrapiError };
};
