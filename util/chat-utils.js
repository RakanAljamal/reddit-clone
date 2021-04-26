import useUser from "../effects/useUser";

function getLastMessage(messageByUser) {
    return messageByUser.slice(-1)[0];
}

function getFirstGroup(groups) {
    const firstGroupKey = Object.keys(groups)[0];
    return groups[firstGroupKey];
}

function groupMessages(messages) {
    const loggedInUser = useUser();
    let groupMessagesByUser = {};

    messages.map(message => {
        if (message.to.id !== loggedInUser.id && !groupMessagesByUser.hasOwnProperty(message.to.id)) {
            groupMessagesByUser[message.to.id] = new Array(message);
        } else if (message.to.id !== loggedInUser.id) {
            groupMessagesByUser[message.to.id].push(message);
        }
        if (message.from.id !== loggedInUser.id && !groupMessagesByUser.hasOwnProperty(message.from.id)) {
            groupMessagesByUser[message.from.id] = new Array(message);
        } else if (message.from.id !== loggedInUser.id) {
            groupMessagesByUser[message.from.id].push(message);
        }
    });

    //Sort by createdAt
    Object.values(groupMessagesByUser).map(group => {
        group.sort((a, b) => {
            return a.createdAt > b.createdAt;
        })
    })

    return groupMessagesByUser;
}

function getOtherUser(message) {
    const loggedInUser = useUser();
    return message.from.id === loggedInUser.id ? message.to : message.from;
}

export {getLastMessage, getFirstGroup, groupMessages, getOtherUser};