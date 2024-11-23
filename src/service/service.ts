export const challenger = {
  getUser: async () => {
    // return client.get({ url: "/challenger/user" });

    return Promise.resolve({
      id: "user1",
    });
  },
};
