type PreviewProps = {
    title: string | undefined;
    subTitle: string | undefined;
    img: string | undefined;
    id?: number | undefined;
}

type CompleteProps = {
    content: string | undefined;
    author: string | undefined;
} & PreviewProps

export type {PreviewProps, CompleteProps}