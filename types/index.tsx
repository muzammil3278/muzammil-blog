export interface Post {
  body: object[];
  _id: string;
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  category: {
    title: string;
    description: string;
    slug: {
      current: string;
    };
  };
  author: {
    image(image: any): unknown;
    name: string;
    bio: string;
    slug: {
      current: string;
    };
  };
  image: {
    asset: {
      url: string;
    };
  };
}

export interface Post {
  _id: string;
  title: string;
  // body: object[];
  poster: string;
  // publishedAt: string;
  // slug: {
  //   current: string;
  // }; 
  // author: {
  //   image: string;
  //   name: string;
  //   bio: string;
  //   slug: {
  //     current: string;
  //   };
  // };
  // category: {
  //   title: string;
  //   description: string;
  //   slug: {
  //     current: string;
  //   };
  // };

}
