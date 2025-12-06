import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { store } from "@/redux/store";
import { ConfigProvider } from "antd";
import { theme } from "@/antdTheme";
import "dayjs/locale/pl";
import dayjs from "dayjs";
import { ChooseFieldsModalProvider } from "@/contexts/ChooseFieldsModalContext";
import { Footer } from "@/components/molecules/Footer";

dayjs.locale("pl");

export function MainLayout() {
  return (
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <ChooseFieldsModalProvider>
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </ChooseFieldsModalProvider>
      </Provider>
    </ConfigProvider>
  );
}
