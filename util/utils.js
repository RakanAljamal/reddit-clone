const formatSubredditName = (subreddit) => `r/${subreddit}`;

const formatUserName = (name) => `u/${name}`;

const formatBodyLength = (body) => `${body.substr(0, 22)}...`;

export {formatSubredditName, formatUserName, formatBodyLength};