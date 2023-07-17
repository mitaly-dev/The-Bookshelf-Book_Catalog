// export const userInfoFromLocalstorage: string | null = JSON.parse(
//   localStorage.getItem('Bookshelf-Info') as string | null;
// );

export const userInfoFromLocalstorage: string | null = JSON.parse(
  localStorage.getItem('Bookshelf-Info') || 'null'
) as string | null;
