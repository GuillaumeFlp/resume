import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./components/theme-provider";

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}
