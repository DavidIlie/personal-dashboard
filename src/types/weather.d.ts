export interface weatherProps {
    weather: [
        {
            description: string;
        }
    ];
    main: {
        temp: number;
        feels_like: number;
    };
}

export interface locationProps {
    city: string;
    country: string;
}
