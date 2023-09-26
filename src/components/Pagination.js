import {
    PaginationContainer,
    PaginationList,
    PaginationItem,
    PaginationLink
} from '../styles/Pagination';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
      <PaginationContainer aria-label="Page navigation example">
        <PaginationList>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => onPageChange(i + 1)}
                className={i + 1 === currentPage ? 'active' : ''}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationList>
      </PaginationContainer>
    );
}

export default Pagination;