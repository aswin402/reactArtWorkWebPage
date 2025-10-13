import React, { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination.jsx';
import './ArtworksList.scss';

function ArtworksList() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [postPerPage, setPostPerPage] = useState(30);

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true); // Reset loading state
      setError(null);
      try {
        const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${postPerPage}`);
        const data = await res.json();
        setArtworks(data.data);
        setTotalPages(data.pagination.total_pages); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworks();
  }, [currentPage]);




  if (loading) return <div>Loading…</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="artworks">
      <h1>Featured Artworks</h1>


      <div className="card">
         {artworks.map(art => (
        <div key={art.id} className="art-item">

          

          {art.image_id ? (
            <img
              src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
              alt={art.title}
              width="300"
            />
          ) : (
            <p>No image available</p>
          )}
          <h3>{art.title}</h3>
          <p>by {art.artist_display}</p>
      
        </div>
      ))}
      </div>
            <Pagination currentPage={currentPage}  onPageChange={setCurrentPage} />
    </div>
  );
}

export default ArtworksList;
