export const getSettingsData = async () => {
    const r = await fetch(`/api/settings`, {
        credentials: "include",
    });
    const response = await r.json();

    return response;
};
