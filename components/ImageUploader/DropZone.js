import {
    DropZoneContainer,
    Clickable,
} from './styles'

const DropZone = ({ fileDrop, fileClick, handleDragOver }) => {
    return (
        <DropZoneContainer
            onDrop={fileDrop}
            onDragOver={handleDragOver}
        >
            <Clickable
                id="file"
                type="file"
                accept="image/*"
                onChange={fileClick}
            />
            <label htmlFor="file">
                <img
                    src="/camera.svg"
                    alt="camera"
                />
                Drap and Drop Images or Click to upload
        </label>
        </DropZoneContainer>
    )
}

export default DropZone