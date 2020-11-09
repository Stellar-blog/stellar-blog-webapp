import {
    CardContainer
} from './styles'

const Card = ({ file, deleteImage }) => {
    return (
        <CardContainer>
            <img 
                id={file.name}
                src={URL.createObjectURL(file)}
                alt={file.name}
                key={file.name}
            />
            <div className="card-overlay">
                <div 
                    className="card-delete-btn"
                    onClick={() => deleteImage(file.name)} 
                >
                    {`Delete ${file.name}`}
                </div>
            </div>
        </CardContainer>
    )
}

export default Card