createTask = async (parent, args, context, info) => {
    const newTask = context.prisma.task.create({
        data: {
            text: args.text,
        },
    })
    return newTask
}

updateTask = async (parent, args, context, info) => {
    const updateTask = context.prisma.task.update({
        where: {
            id: args.id
        },
        data: {
            text: args.text
        },
    })
    return updateTask
}

deleteTask = async (parent, args, context, info) => {
    const deletedTask = context.prisma.task.delete({
        where: {
            id: args.id
        }
    })
    return deletedTask
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
}