tasks = async (parent, args, context) => {
        return context.prisma.task.findMany()
}

module.exports = {
    tasks
}