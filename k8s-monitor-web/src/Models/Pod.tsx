
export default interface Pod {
    id: any,
    name: string;
    imageId: string;
    status: string;
    since: string;
    restarts: number;
    serviceId: string;
}