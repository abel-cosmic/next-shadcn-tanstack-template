"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

export const ReactQueryClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <body>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </body>
);
