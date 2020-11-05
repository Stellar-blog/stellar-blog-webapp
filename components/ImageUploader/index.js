import { useState } from 'react'

import DropZone from './DropZone'
import Preview from './Preview'
import ErrorMessage from '../ErrorMessage'

const ImageUploader = ({ handleChange }) => {

    const [ imageFiles , setImageFiles ] = useState([])
    const [ errors, setError ] = useState([])

    const fileDrop = (e) => {
        e.preventDefault()
        fileProcessing(e.dataTransfer.files)
    }

    const fileClick = e => fileProcessing(e.target.files)

    const fileProcessing = (files) => {
        setError([])

        const filtered = [...files].filter(file => validateFileType(file))

        if (!filtered.length) return

        const sliced = validateFileCount(filtered, 3)

        setImageFiles(sliced)
        handleChange({
            target: {
                name: "files",
                value: sliced,
            }
        })
    }

    const validateFileCount = (files, max) => {
        if (files.length > max) {
            setError(state => {
                return state.concat({
                    message: `Upload up to ${max} images`,
                    filename: files[max]
                })
            })
        }

        return files.slice(0, max)
    }

    const validateFileType = (file) => {
        if (file.type.includes("image")) return true

        setError(state => {
            return state.concat({
                message: "File must be an image",
                filename: file.name
            })
        })

        return false
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        console.log("drag over")
    }

    const deleteImage = (name) => {
        const imageList = imageFiles.slice()

        const filtered = imageList.filter(image => image.name !== name)

        setImageFiles(filtered)
        handleChange({
            target: {
                name: "files",
                value: filtered,
            }
        })
    }


    return(
        <>
            {
                imageFiles.length
                ? <Preview 
                    imageFiles={imageFiles} 
                    deleteImage={deleteImage} 
                    />
                : <DropZone 
                    fileDrop={fileDrop}
                    fileClick={fileClick}
                    handleDragOver={handleDragOver}
                    />
            }
            <ErrorMessage errors={errors} />
        </>
    )
}

export default ImageUploader
