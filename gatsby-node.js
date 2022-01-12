exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulBlog {
        nodes {
          id
          title
          createdAt(formatString: "MMM-DD-YYYY")
          updatedAt(formatString: "MMM-DD-YYYY")
          description {
            raw
          }
          tags
          slug
          author {
            name
            username
          }
        }
      }
      allContentfulAuthor {
        nodes {
          name
          username
          blog {
            id
            title
            slug
            type
            updatedAt(formatString: "MMM-DD-YYYY")
            description {
              raw
            }
          }
        }
      }
    }
  `);
  data.allContentfulBlog.nodes.forEach((blog) => {
    actions.createPage({
      path: `/blog/${blog.slug}`,
      component: require.resolve(`./src/Template/Blog.tsx`),
      context: {
        data: blog,
      },
    });
  });

  data.allContentfulAuthor.nodes.forEach((author) => {
    actions.createPage({
      path: `/author/${author.username}`,
      component: require.resolve(`./src/Template/Author.tsx`),
      context: {
        data: author,
      },
    });
  });
};
