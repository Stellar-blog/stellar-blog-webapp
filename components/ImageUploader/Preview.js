import Card from './Card'
import {
    PreviewContainer
} from './styles'

const Preview = ({ imageFiles, deleteImage }) => {
    if (imageFiles.length === 0) return null

    return (
        <PreviewContainer>
            {
                imageFiles.map(file => {
                    return <Card 
                                key={file.name} 
                                file={file} 
                                deleteImage={deleteImage} 
                            />
                })
            }
        </PreviewContainer>
    )
}

export default Preview