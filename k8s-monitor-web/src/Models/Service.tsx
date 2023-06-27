import Pod from "./Pod";

export default interface Service {
    id: string;
    name: string;
    pods: Pod[];
    since: string;
}