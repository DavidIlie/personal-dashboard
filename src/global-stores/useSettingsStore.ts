import create from "zustand";

interface SettingsType {
    prefered_theme: "light" | "dark";
    name: string;
    setup: boolean;
    newsKey: String;
    weatherKey: String;
    ipKey: String;
}

type Store = {
    settings: SettingsType;
    updateSettings: (settings: SettingsType) => void;
};

export const useSettingsStore = create<Store>((set) => ({
    settings: {} as SettingsType,
    updateSettings(settings: SettingsType) {
        set((state) => ({
            ...state,
            settings: settings,
        }));
    },
}));
