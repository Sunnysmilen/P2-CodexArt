type workType = {
  id?: number;
  title?: string;
  artist_title?: string;
  image_id?: string;
  date_start?: number;
  category_titles?: string;
  thumbnail?: { alt_text?: string };
};

function cardOeuvre({
  id,
  title,
  artist_title,
  image_id,
  date_start,
  category_titles,
  thumbnail,
}: workType) {
  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div key={id} className="arts">
            <h2>{title}</h2>
            <p>{artist_title}</p>
            <img
              src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
              alt={title}
            />
          </div>
          <div className="arts-back">
            <p>{category_titles}</p>
            <p>{date_start}</p>
            <p>{thumbnail?.alt_text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default cardOeuvre;
