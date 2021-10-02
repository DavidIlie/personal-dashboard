import { useSettingsStore } from "@global-stores/useSettingsStore";

export default function useSettings() {
    const settings = useSettingsStore((s) => s.settings);

    return settings;
}
