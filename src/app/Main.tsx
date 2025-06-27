"use client";

import { useState, createContext, use, useMemo } from "react";
import { Footer, HeaderNavbar } from "./layout/appLayout/utils";
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { ModalContainer } from "@/UI/ModalDialog";
import { memo } from "react";
import { useColorScheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLoadingBar } from "react-top-loading-bar";

export const PageLoadContext = createContext<PageLoadContextProps>({
  pageLoad: false,
  startLoading: () => undefined,
  stopLoading: () => undefined,
});

const Main = memo(({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  const loadingBar = useLoadingBar();

  const [pageLoad, setPageLoad] = useState(false);
  const pathName = usePathname();
  const { mode, systemMode } = useColorScheme();

  const startLoading = (topLoader: boolean = true) => {
    setPageLoad(true);
    if (topLoader) loadingBar.start();
  };
  const stopLoading = () => {
    setPageLoad(false);
    loadingBar.complete();
  };

  const pageLoadContextProps = useMemo(
    () => ({ pageLoad, startLoading, stopLoading }),
    [pageLoad]
  );

  return (
    <PageLoadContext.Provider value={pageLoadContextProps}>
      <QueryClientProvider client={queryClient}>
        <HeaderNavbar />

        {pathName.includes("dashboard") ? (
          children
        ) : (
          <>
            <Container
              component="main"
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: { xs: "auto", xl: "75rem" },
                mx: "auto",
                py: { xs: "2rem", md: "3rem" },
                "&": {
                  px: { xs: "1.5rem", md: "2rem" },
                },
                gap: { xs: "3rem", md: "6rem" },
              }}
            >
              {children}
            </Container>
            <Footer />
          </>
        )}

        <ModalContainer
          theme={mode === "system" ? systemMode : mode}
          transitionMode="Grow"
          transformOrigin="bottom top"
        />
      </QueryClientProvider>
    </PageLoadContext.Provider>
  );
});

export type PageLoadContextProps = {
  pageLoad: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

export const usePageLoader = () => {
  const pageLoader = use(PageLoadContext);
  if (!pageLoader)
    throw new Error("usePageLoader hook must be within in a PageLoadContext.");

  return pageLoader;
};

export default Main;
