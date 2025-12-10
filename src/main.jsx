import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider as ReduxProvider } from "react-redux";

import "./index.css";
// import { AppRouter } from "./Router";
import Router from "./Router";
import UserProvider from "./contexts/user/UserProvider";
// import ThemeProvider from "./contexts/theme/ThemeProvider";
import reduxStore from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={reduxStore}>
      {/* <ThemeProvider> */}
      <UserProvider>
        <BrowserRouter>
          {/* <AppRouter /> */}
          <Router />
        </BrowserRouter>
      </UserProvider>
      {/* </ThemeProvider> */}
    </ReduxProvider>
  </StrictMode>
);
