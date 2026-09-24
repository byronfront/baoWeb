"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type EnquireState = {
  open: boolean;
  productName?: string;
};

type EnquireContextValue = {
  state: EnquireState;
  openEnquire: (productName?: string) => void;
  closeEnquire: () => void;
};

const EnquireContext = createContext<EnquireContextValue | null>(null);

export function EnquireProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<EnquireState>({ open: false });

  const openEnquire = useCallback((productName?: string) => {
    setState({ open: true, productName });
  }, []);

  const closeEnquire = useCallback(() => {
    setState((current) => ({ ...current, open: false }));
  }, []);

  const value = useMemo(
    () => ({ state, openEnquire, closeEnquire }),
    [state, openEnquire, closeEnquire]
  );

  return (
    <EnquireContext.Provider value={value}>{children}</EnquireContext.Provider>
  );
}

export function useEnquire() {
  const ctx = useContext(EnquireContext);
  if (!ctx) {
    throw new Error("useEnquire must be used within EnquireProvider");
  }
  return ctx;
}
