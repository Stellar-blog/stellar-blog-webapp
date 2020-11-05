const validator = (formState) => {
    if (!formState.title) {
        throw new Error("Title is empty")
    }
}

export default validator