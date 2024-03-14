import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { client } from "./core/clients/clients";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NextUIProvider>
          <main className="light text-foreground bg-background">
            <App />
          </main>
        </NextUIProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
