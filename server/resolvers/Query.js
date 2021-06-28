tasks = (parent, args, context) => {
        return context.prisma.task.findMany({
            orderBy: args.orderBy,
        })
}

module.exports = {
    tasks
}

