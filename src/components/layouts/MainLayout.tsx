import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { store } from "@/redux/store";
import { ConfigProvider } from "antd";
import { theme } from "@/antdTheme";
import "dayjs/locale/pl";
import dayjs from "dayjs";
import { ChooseFieldsModalProvider } from "@/contexts/ChooseFieldsModalContext";
import { Footer } from "@/components/molecules/Footer";
import { ParamsProvider } from "@/providers/ParamsProvider";
import { NuqsAdapter } from "nuqs/adapters/react";

dayjs.locale("pl");

export function MainLayout() {
  return (
    <NuqsAdapter>
      <ConfigProvider theme={theme}>
        <Provider store={store}>
          <ChooseFieldsModalProvider>
            <ParamsProvider>
              <div className="container">
                <Outlet />
              </div>
              <Footer />
            </ParamsProvider>
          </ChooseFieldsModalProvider>
        </Provider>
      </ConfigProvider>
    </NuqsAdapter>
  );
}
