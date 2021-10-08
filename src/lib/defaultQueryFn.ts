export const defaultQueryFn = async ({ queryKey }: { queryKey: string }) => {
    const request = await fetch(`${queryKey}`, {
        credentials: "include",
    });

    const response = await request.json();

    if (request.status !== 200) {
        throw new Error(response.message);
    }

    return response;
};
