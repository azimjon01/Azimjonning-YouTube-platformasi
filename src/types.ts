export type VideoItem = {
  id: string;
  snippet: {
    categoryId: string;
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
  };
};

export type FeedProps = {
  category: string;
};
