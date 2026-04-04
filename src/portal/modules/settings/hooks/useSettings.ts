import { useEffect, useState } from "react";
import type { PlatformSettings } from "../types/settings.types";
import { fetchSettings } from "../api/settings.api";

export function useSettings() {
  const [settings, setSettings] = useState<PlatformSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings().then((data) => {
      setSettings(data);
      setLoading(false);
    });
  }, []);

  const updateSettings = (updated: PlatformSettings) => {
    setSettings(updated);
  };

  return { settings, loading, updateSettings };
}
