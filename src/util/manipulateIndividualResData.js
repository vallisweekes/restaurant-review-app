export function manipulateIndividualResData(arr, id) {
  arr.map(item => {
    return {
      id: id,
      name: item.author_name,
      photo: item.profile_photo_url,
      rating: item.rating,
      timeStame: item.relative_time_description,
      reviewText: item.text
    };
  });
}
