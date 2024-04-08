import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Pagination = ({ pages=1, currentPage = 1, rootPath = "" }) => {
  const params = useParams();
  const pageNo = params.pageNo ? Number(params.pageNo) : null;

  const [page, setPage] = useState(currentPage);

  const maxDisplayedPages = 5; // Maximum number of pages to display
  const displayRange = 2; // Range of pages to display around the current page

  let startPage = Math.max(1, currentPage - displayRange);
  let endPage = Math.min(pages, currentPage + displayRange);

  // If the range of pages around the current page is less than the maximum displayed pages,
  // adjust the start and end page accordingly
  if (endPage - startPage + 1 < maxDisplayedPages) {
    if (currentPage < pages / 2) {
      endPage = Math.min(pages, startPage + maxDisplayedPages - 1);
    } else {
      startPage = Math.max(1, endPage - maxDisplayedPages + 1);
    }
  }

  const pagesList = [];
  for (let i = startPage; i <= endPage; i++) {
    pagesList.push(i);
  }

  useEffect(() => {
    if (pageNo) {
      setPage(pageNo);
    }
  }, [pageNo]);
  return (
    <nav className='w-full mt-3 flex justify-end'>
      <ul className='flex items-center text-sm'>
        <li>
          <Link
            to={`${rootPath}/page/${page === 1 ? pages : page - 1}`}
            className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-orange-600 rounded-s-lg hover:bg-orange-600'
          >
            {/* <span className='sr-only'>Previous</span> */}
            <svg
              className='w-2.5 h-2.5 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 1 1 5l4 4'
              />
            </svg>
          </Link>
        </li>
        {pagesList.map((page) => (
          <li
            key={page}
            className={`page-item ${
              page === currentPage ? "bg-orange-600" : ""
            }`}
          >
            <Link
              className={`z-10 flex items-center justify-center px-3 h-8 leading-tight border border-orange-600 ${
                page === currentPage ? "bg-amber-400 text-white" : ""
              } hover:bg-orange-600`}
              to={`${rootPath}/page/${page}`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={`${rootPath}/page/${page === pages ? 1 : page + 1}`}
            className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-orange-600 rounded-e-lg hover:bg-orange-600'
          >
            {/* <span className='sr-only'>Next</span> */}
            <svg
              className='w-2.5 h-2.5 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
