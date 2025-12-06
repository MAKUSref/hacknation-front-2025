import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { store } from "@/redux/store";
import { ConfigProvider } from "antd";
import { theme } from "@/antdTheme";
import "dayjs/locale/pl";
import dayjs from "dayjs";
import { ChooseFieldsModalProvider } from "@/contexts/ChooseFieldsModalContext";

dayjs.locale("pl");

export function MainLayout() {
  return (
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <ChooseFieldsModalProvider>
          <div className="container">
            <Outlet />
          </div>
        </ChooseFieldsModalProvider>
      </Provider>
    </ConfigProvider>
  );
}
