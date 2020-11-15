import {
    Image,
    ImageContainer,
} from './styles'

const ImageLoader = ({ imageUrls, data }) => {

    return (
        <ImageContainer>
            {
                imageUrls.map((url, i) => <Image
                    src={url}
                    alt={data.title}
                    key={url}
                    height={data.postImages.items[i].size}
                />)
            }
        </ImageContainer>
    )
}

export default ImageLoader