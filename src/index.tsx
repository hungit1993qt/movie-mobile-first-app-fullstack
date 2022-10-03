import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

//setup redux
import store from "./configStore";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

