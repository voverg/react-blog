import React from 'react';

import BasicButton from '../BasicButton';
import {getPageArray} from '../../../utils';

import classes from './Pagination.module.css';

const Pagination = ({totalPages, page, changePage, ...props}) => {
  const className = props.className ? props.className : '';
  const pagesArray = getPageArray(totalPages);

  return (
    <div className={ `${classes.pagination} ${className}` }>
      {pagesArray.map(pageNumber =>
        <BasicButton
          key={pageNumber}
          className={
            pageNumber === page
              ? `${classes.pagination__btn} ${classes.active}`
              : classes.pagination__btn
            }
          onClick={() => changePage(pageNumber)}
        >
          {pageNumber}
        </BasicButton>
      )}
    </div>
  );
};

export default Pagination;
