import {
    Image,
    ImageContainer,
} from './styles'

const ImageLoader = ({ imageUrls, data }) => {

    const urlBuilder = (url) => {
        return `${process.env.NEXT_PUBLIC_S3_BUCKET}${url}`
    }

    return (
        <ImageContainer>
            {
                imageUrls.map((url, i) => <Image
                    src={urlBuilder(url)}
                    alt={data.title}
                    key={url}
                    height={data.postImages.items[i].size}
                />)
            }
        </ImageContainer>
    )
}

export default ImageLoader