exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulBlog {
        nodes {
          id
          title
          updatedAt(formatString: "MMM-DD-YYYY")
          description {
            raw
          }
          tags
        }
      }
    }
  `);
  data.allContentfulBlog.nodes.forEach((blog) => {
    const slug = blog.title
      .replace(/\s+/g, "-")
      .replace(/[?,/]*/g, "")
      .toLowerCase();
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/Template/index.tsx`),
      context: {
        data: blog,
      },
    });
  });
};
