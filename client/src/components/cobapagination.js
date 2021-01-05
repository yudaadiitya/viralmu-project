// import "./App.css";
import { useEffect, useState } from "react";

function CobaPagination() {
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [videos, setVideos] = useState([]);

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

    useEffect(() => {
        fetch(`http://localhost:3001/api/video?page=${pageNumber}`)
            .then((response) => response.json())
            .then(({ totalPages, videos }) => {
                setVideos(videos);
                setNumberOfPages(totalPages);
            });
    }, [pageNumber]);

    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
    };

    const gotoNext = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
    };

    return (
        <div className="App">
            <h3>Page of {pageNumber + 1}</h3>

            {videos.map((video) => (
                <div key={videos._id} className="post">
                    <h4>{videos.title}</h4>
                    <p>{videos.description}</p>
                </div>
            ))}

            <button onClick={gotoPrevious}>Previous</button>
            {pages.map((pageIndex) => (
                <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
                    {pageIndex + 1}
                </button>
            ))}
            <button onClick={gotoNext}>Next</button>
        </div>
    );
}

export default CobaPagination;