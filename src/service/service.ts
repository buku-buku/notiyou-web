interface User {
  id: string;
  userToken: string;
}

export const challenger = {
  getUser: async (userToken: string): Promise<User> => {
    // return client.get({ url: "/challenger/user" });

    return Promise.resolve({
      id: "user1",
      userToken,
    });
  },
};
