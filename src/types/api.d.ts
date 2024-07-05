type Api = {
  system: {
    login: (data: any) => Promise<any>
  },
  user: {
    getUserinfo: () => Promise<any>,
    editUserinfo: (data: any) => Promise<any>,
    // ...
  }
}