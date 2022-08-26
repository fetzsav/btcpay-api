type AuthorizedEvents = {
    everything: boolean,
    specificEvents: string[],
}

type CreateWebHookBody = {
    id: string,
    enabled: boolean,
    automaticRedelivery: boolean,
    url: string,
    authorizedEvents: AuthorizedEvents
    secret: string,
}