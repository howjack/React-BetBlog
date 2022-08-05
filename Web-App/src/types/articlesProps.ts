type PreviewProps = {
    title: string;
    subTitle: string;
    img: string;
    id?: number;
}

type CompleteProps = {
    content: string;
    author: string;
} & PreviewProps

type RegisterProps = {
    _id: number
} 

export type {PreviewProps, CompleteProps}