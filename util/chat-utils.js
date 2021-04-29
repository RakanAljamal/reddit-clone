import useUser from "../effects/useUser";


function getOtherUser(message) {
    const loggedInUser = useUser();
    return message.from.id === loggedInUser.id ? message.to : message.from;
}

function checkActiveMessage(message, otherMessage) {
    console.log('Entred');
    if (!message || !otherMessage) {
        return false;
    }
    return ((message.from.id === otherMessage.from.id) && (message.to.id === otherMessage.to.id));
}

export {getOtherUser, checkActiveMessage};
