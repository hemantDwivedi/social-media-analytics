const numberFrom = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") return Number.parseInt(value, 10) || 0;
  return 0;
};

const tweetEngagements = (tweet) =>
  numberFrom(tweet.like_count ?? tweet.favorite_count) +
  numberFrom(tweet.reply_count) +
  numberFrom(tweet.retweet_count) +
  numberFrom(tweet.quote_count);

export const buildXquikAnalytics = (tweets = []) =>
  tweets.reduce(
    (analytics, tweet) => ({
      ...analytics,
      reachedCount: analytics.reachedCount + numberFrom(tweet.view_count ?? tweet.views),
      engagedCount: analytics.engagedCount + tweetEngagements(tweet),
      postsCount: analytics.postsCount + 1,
      saveCount: analytics.saveCount + numberFrom(tweet.bookmark_count),
      commentsCount: analytics.commentsCount + numberFrom(tweet.reply_count),
      sharesCount:
        analytics.sharesCount +
        numberFrom(tweet.retweet_count) +
        numberFrom(tweet.quote_count),
    }),
    {
      reachedCount: 0,
      engagedCount: 0,
      storiesCount: 0,
      followsCount: 0,
      postsCount: 0,
      saveCount: 0,
      commentsCount: 0,
      sharesCount: 0,
    }
  );

export const buildXquikAccount = (user = {}) => ({
  platform: "X",
  followersCount: numberFrom(user.followers_count ?? user.followersCount),
  followingCount: numberFrom(user.following_count ?? user.followingCount),
  postsCount: numberFrom(user.statuses_count ?? user.statusesCount),
});
