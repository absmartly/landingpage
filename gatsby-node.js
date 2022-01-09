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
          slug
        }
      }
    }
  `);
  data.allContentfulBlog.nodes.forEach((blog) => {
    actions.createPage({
      path: `/blog/${blog.slug}`,
      component: require.resolve(`./src/Template/index.tsx`),
      context: {
        data: blog,
      },
    });
  });
};
