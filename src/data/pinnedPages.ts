export interface PinnedPageProps {
   name: string;
   type?: string;
   url: string;
   image: string;
   internal?: boolean;
}

export const pinnedPages: PinnedPageProps[] = [
   {
      name: "Nucleus",
      url: "https://nucleus.davidapps.dev",
      image: "https://user-images.githubusercontent.com/47594764/124385080-8c4d8480-dcd4-11eb-9dbb-090f17f5b7ec.png",
      internal: true,
   },
   {
      name: "TrueNAS",
      url: "https://truenas.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/4f04ba35-0ee0-4847-89b2-45f91501645b",
      internal: true,
   },
   {
      name: "MinIO",
      type: "Storage",
      url: "https://minio.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/bfea165c-9968-4222-908a-25cbdbb6a327",
      internal: true,
   },
   {
      name: "Rook",
      type: "Ceph",
      url: "https://rook.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/deacf7ea-1a13-40b7-897f-bdfeb70f0fab",
      internal: true,
   },

   {
      name: "HASS",
      type: "Romania",
      url: "https://hass.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/139a2d24-0e1d-412d-93c4-56ef08c2aaf0",
   },
   {
      name: "HASS",
      type: "Spain",
      url: "https://hass.davidapps.es",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/139a2d24-0e1d-412d-93c4-56ef08c2aaf0",
   },
   {
      name: "HASS",
      type: "UK",
      url: "https://hass.davidinfra.co.uk",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/139a2d24-0e1d-412d-93c4-56ef08c2aaf0",
   },
   {
      name: "Pterodactyl",
      url: "https://panel.davidapps.dev",
      image: "https://user-images.githubusercontent.com/47594764/124396725-8cb54200-dd0b-11eb-95ae-1b991835d330.png",
   },
   {
      name: "Prowlarr",
      type: "Indexer",
      url: "https://prowlarr.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/72f85098-c89b-4526-b1a1-44810209c79a",
      internal: true,
   },
   {
      name: "Radarr",
      type: "Movies",
      url: "https://radarr.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/c9879099-2f1f-475f-ac87-0e2c0b61d59b",
      internal: true,
   },
   {
      name: "Sonarr",
      type: "TV",
      url: "https://sonarr.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/e85d0016-3547-4e43-a46d-063c7f67be4c",
      internal: true,
   },
   {
      name: "Overseer",
      type: "Requests",
      url: "https://requests.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/dfb74479-2e10-4936-9066-89bee6d11c02",
      internal: false,
   },
   {
      name: "qBittorent",
      type: "Pirate",
      url: "https://qb.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/fdebfd05-f67b-4ce0-8e73-46bbdbcd53ce",
      internal: true,
   },
   {
      name: "SABnzbd",
      type: "Usenet",
      url: "https://sab.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/f0d5df20-20dc-48c4-b16e-f9fa45076969",
      internal: true,
   },
   {
      name: "Tautulli",
      url: "https://tautulli.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/57c7abb8-42bb-4c5a-a648-23f633502ae6",
      internal: true,
   },
   {
      name: "Excalidraw",
      url: "https://draw.davidapps.dev",
      image: "https://github.com/DavidIlie/personal-dashboard/assets/47594764/d9d4bd22-fc83-4662-baee-114ed200bb10",
   },
];
