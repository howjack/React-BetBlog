type PreviewProps = {
    title: string;
    subTitle: string;
    img: string;
    _id: number;
}

type CompleteProps = {
    content: string;
    author: string;
} & PreviewProps

export type {PreviewProps, CompleteProps}