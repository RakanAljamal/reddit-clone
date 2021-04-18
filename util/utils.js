const formatSubredditName = (subreddit) => `r/${subreddit}`;

const formatUserName = (name) => `u/${name}`;

const formatLink = (body) => `${body.substr(0, 22)}...`;

export {formatSubredditName, formatUserName, formatLink};