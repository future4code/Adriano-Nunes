export type recipe = {
    id: string;
    title: string;
    description: string;
    creationDate: number;
}

export interface recipeInputDTO {
    title: string;
    description: string;
    creationDate: number;
}