export interface breadcrumb {
    title: string,
    page: string,
    sub_page: string
}


export interface pagination{
    totalItems: number,
    currentPage: number,
    pageSize: number,
    totalPages: number,
    startPage: number,
    endPage: number,
    startIndex: number,
    endIndex: number,
    pages: number[],
  }