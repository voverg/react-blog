// Принимает общее кол-во постов и их лимит на одной странице. Возвращает кол-во страниц
export const getPageCount = (totalCount, limit) => {
  const pageCount = Math.ceil(totalCount / limit);

  return pageCount;
}

export const getPageArray = (totalPages) => {
  let pagesArray = [];

  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }

  return pagesArray;
}
