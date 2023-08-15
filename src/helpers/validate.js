export const validate = (title, description) => {
    const msg = {
        type: "",
        body: {
            message: ""
        }
    }

    if (! description || description.length < 6) {
        msg.type = 'Error'
        msg.body.message = "La descripcion debe tener al menos 6 caracteres.";
    }

    if (!title || title.length < 3 || title.length > 25) {
        msg.type = 'Error'
        msg.body.message = `El titulo de la Tarea debe tener entre 3 y 25 caracteres.`
    }

    return msg
}