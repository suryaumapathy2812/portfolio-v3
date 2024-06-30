"use client";

import { ThemeProvider } from "next-themes";

const themeProps = {
  storageKey: "theme",
  attribute: "class",
  defaultTheme: "system",
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider {...themeProps}>{children}</ThemeProvider>;
}
