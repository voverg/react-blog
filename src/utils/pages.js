// Принимает общее кол-во постов и их лимит на одной странице. Возвращает кол-во страниц
export const getPageCount = (totalCount, limit) => {
  const pageCount = Math.ceil(totalCount / limit);

  return pageCount;
}
