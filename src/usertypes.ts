interface IPuppy {
    "id": string | null,
    "name": string,
    "breed": string,
    "birthDate": string
}

interface IPuppyNoID {
    "name"?: string,
    "breed"?: string,
    "birthDate"?: string
}

export type { IPuppy, IPuppyNoID };