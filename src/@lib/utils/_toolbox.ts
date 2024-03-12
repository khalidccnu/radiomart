export const $$ = {
  appendPagination: function (path: string, page = 1, limit = 10): string {
    return `${path}?page=${page}&limit=${limit}`;
  },
};
