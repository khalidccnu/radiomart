export const $$ = {
  isEmpty: function (value: any): boolean {
    return (
      value === null ||
      value === undefined ||
      value === '' ||
      (Array.isArray(value) && value.length === 0) ||
      value === 'null' ||
      value === 'undefined'
    );
  },

  isNotEmpty: function (value: any): boolean {
    return value !== null && value !== undefined && value !== '' && value.length !== 0;
  },

  isValidObject: function (value: any): boolean {
    return typeof value === 'object' && value !== null;
  },

  toSafeObject: function (value: any): any {
    if (this.isNotEmpty(value)) return value;
    return {};
  },

  toCleanObject: function (obj: { [key: string]: any }): any {
    if (this.isValidObject(obj)) {
      Object.keys(obj).forEach((key) => {
        if (this.isEmpty(obj[key])) delete obj[key];
      });
    }

    return this.toSafeObject(obj);
  },

  queryNormalizer: function (options: any): any {
    const pureOption = this.toCleanObject(options);

    if (pureOption?.query) return options.query;

    const queries: any = [];
    Object.entries(pureOption).map(([key, value]: any) => {
      const valueType = Array.isArray(value) ? 'array' : typeof value;

      if (key === 'sort') {
        return queries.push(`${key}=${JSON.stringify(value)}`);
      } else if (valueType === 'array' || key === 'filter') {
        return value.map((option: any) => queries.push(`${key}=${option}`));
      } else if (valueType === 'object') {
        return queries.push(`${key}=${JSON.stringify(value)}`);
      } else {
        return queries.push(`${key}=${value}`);
      }
    });

    return queries.join('&');
  },

  appendPagination: function (path: string, page = 1, limit = 10): string {
    return `${path}?page=${page}&limit=${limit}`;
  },
};
