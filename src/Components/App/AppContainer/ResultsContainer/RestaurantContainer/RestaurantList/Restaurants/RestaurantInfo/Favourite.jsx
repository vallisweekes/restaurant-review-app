import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Favourite = ({ favourite, onClick }) => {
  return (
    <section className="rest__card-favourites" onClick={onClick}>
      {!favourite ? (
        <FavoriteBorderIcon />
      ) : (
        <FavoriteIcon style={{ color: '#042ed8' }} />
      )}
    </section>
  );
  // if (true) {
  //   return (
  //     <div>
  //       <FavoriteBorderIcon fontSize={'small'} color={'secondary'} />
  //     </div>
  //   );
  // } else {
  //   return <FavoriteIcon fontSize={'small'} color={'secondary'} />;
  // }
};

export default Favourite;
