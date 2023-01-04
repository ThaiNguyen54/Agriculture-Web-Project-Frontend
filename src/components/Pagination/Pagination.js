import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './PaginationPostList';
import "../../styles/pagination.scss"
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    const element = document.getElementById('head');
    if (element) {
      onPageChange(currentPage + 1);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onPrevious = () => {
    const element = document.getElementById('head');
    if (element) {
      onPageChange(currentPage - 1);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectPage = (pageNumber) => {
    const element = document.getElementById('head');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onPageChange(pageNumber);
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => selectPage(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;