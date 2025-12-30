import React, { createContext, useContext, useMemo, useState } from "react";

const I18nContext = createContext({ t: (k) => k });

export function I18nProvider({ translations, defaultLang = "en", children }) {
  const [lang, setLang] = useState(defaultLang);

  const t = useMemo(() => {
    const table = translations?.[lang] ?? {};
    return (key) => table[key] ?? key;
  }, [lang, translations]);

  const value = useMemo(() => ({ t, lang, setLang }), [t, lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function Translate({ id }) {
  const { t } = useI18n();
  return t(id);
}
