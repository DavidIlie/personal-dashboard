interface PinnedPageProps {
    name: string;
    type: string;
    url: string;
    image: string;
    authelia: boolean;
}

export const pinnedPages: PinnedPageProps[] = [
    {
        name: "Nucleus",
        type: "Hypervisor",
        url: "https://nucleus.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124385080-8c4d8480-dcd4-11eb-9dbb-090f17f5b7ec.png",
        authelia: false,
    },
    {
        name: "Citrus",
        type: "Hypervisor",
        url: "https://citrus.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124385080-8c4d8480-dcd4-11eb-9dbb-090f17f5b7ec.png",
        authelia: false,
    },
    {
        name: "Plasma",
        type: "Hypervisor",
        url: "https://plasma.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124385080-8c4d8480-dcd4-11eb-9dbb-090f17f5b7ec.png",
        authelia: false,
    },
    {
        name: "Venus",
        type: "NAS",
        url: "https://venus.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124395463-8cfe0f00-dd04-11eb-935d-909e3ec2225e.png",
        authelia: true,
    },
    {
        name: "Traefik",
        type: "Reverse Proxy",
        url: "https://traefik.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124396436-d4d36500-dd09-11eb-934e-b50a611c116a.png",
        authelia: true,
    },
    {
        name: "Rancher",
        type: "Kubernetes Management",
        url: "https://rancher.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124396462-ff252280-dd09-11eb-9552-23c26e7183cb.png",
        authelia: false,
    },
    {
        name: "Longhorn",
        type: "Kubernetes PVCs",
        url: "https://longhorn.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124396745-c128fe00-dd0b-11eb-95e5-fffae818dbdc.png",
        authelia: true,
    },
    {
        name: "Plausible",
        type: "Web Analytics",
        url: "https://stats.davidilie.com",
        image: "https://user-images.githubusercontent.com/47594764/126315061-09fce13b-275e-42d8-865a-a5f2c519e41f.png",
        authelia: false,
    },
    {
        name: "motionEye",
        type: "Home Cameras",
        url: "https://cameras.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/126952940-011d641d-88ef-4f67-893c-a947f6ac2c1c.png",
        authelia: true,
    },
    {
        name: "Plex",
        type: "Media Server",
        url: "https://plex.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124396685-5d063a00-dd0b-11eb-8c68-3bdb66e1d159.png",
        authelia: false,
    },
    {
        name: "Pterodactyl",
        type: "Game Server Manager",
        url: "https://panel.davidapps.dev",
        image: "https://user-images.githubusercontent.com/47594764/124396725-8cb54200-dd0b-11eb-95ae-1b991835d330.png",
        authelia: false,
    },
    {
        name: "Roundcube",
        type: "Web Mail",
        url: "https://mail.davidilie.com",
        image: "https://user-images.githubusercontent.com/47594764/126315540-28e4dac8-243f-46f1-b0f8-46ef28fc9e1e.png",
        authelia: false,
    },
];
