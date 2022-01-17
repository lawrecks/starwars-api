/* eslint-disable implicit-arrow-linebreak */
export const filterAndUpdateMovies = (movies, comments) => {
  const movieList = movies.map((item) => ({
    episode_id: item.episode_id,
    title: item.title,
    opening_crawl: item.opening_crawl,
    release_date: item.release_date,
  }));
  const result = [];
  movieList.forEach((movie) => {
    const comment = comments.find((item) => movie.episode_id === item.episode_id);
    if (comment) {
      result.push({
        ...movie,
        comment_count: Number(comment.total),
      });
    } else {
      result.push({
        ...movie,
        comment_count: 0,
      });
    }
  });
  return result;
};

export const sortByDate = (movies) => movies.sort((a, b) => {
  const dateA = new Date(a.release_date);
  const dateB = new Date(b.release_date);
  return dateB - dateA;
});
