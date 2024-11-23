interface RequestParams {
  url: string;
  params?: Record<string, string>;
  options?: RequestInit;
}

const appendSearchParams = (url: string, params?: Record<string, string>) => {
  if (!params) {
    return url;
  }

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.append(key, value);
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `${url}?${queryString}` : url;
};

const get = async ({ url, params, options = {} }: RequestParams) => {
  try {
    const urlWithParams = appendSearchParams(url, params);
    const res = await fetch(urlWithParams, options);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const post = async ({ url, params, options = {} }: RequestParams) => {
  try {
    const urlWithParams = appendSearchParams(url, params);
    const res = await fetch(urlWithParams, {
      method: "POST",
      ...options,
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const put = async ({ url, params, options = {} }: RequestParams) => {
  try {
    const urlWithParams = appendSearchParams(url, params);
    const res = await fetch(urlWithParams, {
      method: "PUT",
      ...options,
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const client = {
  get,
  post,
  put,
};
