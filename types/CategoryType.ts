import { ColorTokens } from "tamagui";
import { ProductsType } from "./ProductsType";

export type CategoryType = {
    id: number;
    title: string;
    image: any;
    imageWidth: number;
    imageHeight: number;
    color: ColorTokens | any;
    products?: ProductsType;
}