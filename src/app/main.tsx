import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import RouterRoot from "./router/RouterRoot";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartStoreProvider } from "@/entities/basket/store/cartStore";

// Создаем экземпляр QueryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartStoreProvider>
      <QueryClientProvider client={queryClient}>
        <RouterRoot />
      </QueryClientProvider>
    </CartStoreProvider>
  </React.StrictMode>,
);
