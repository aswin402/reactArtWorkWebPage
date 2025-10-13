import React from 'react';
import './Pagination.scss';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];
    return (
        <div className="pagination">
            <button
                className="button-17"
                role='button'
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            > 
                Previous
            </button>
            <button className="button-17 current-page">
                {currentPage}
            </button>
            <button className="button-17" onClick={() => onPageChange(currentPage + 1)}>
                {currentPage+1}
            </button>
            <button className="button-17" onClick={() => onPageChange(currentPage + 2)}>
                {currentPage+2}
            </button>
            <button className="button-17" onClick={() => onPageChange(currentPage + 3)}>
                {currentPage+3}
            </button>
            <button className="button-17" onClick={() => onPageChange(currentPage + 4)}>
                {currentPage+4}
            </button>
            <button className="button-17" onClick={() => onPageChange(currentPage + 5)}>
                {currentPage+5}
            </button>
            <button
                className="button-17"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;