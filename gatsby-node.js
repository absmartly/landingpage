exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulBlog {
        nodes {
          id
          contentful_id
          title
          heroImage {
            gatsbyImageData
          }
          createdAt(formatString: "MMM DD YYYY")
          updatedAt(formatString: "MMM DD YYYY")
          description {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                gatsbyImageData(placeholder: TRACED_SVG)
                file {
                  fileName
                }
              }
            }
          }
          tags
          slug
          seoTitle
          seoDescription {
            seoDescription
          }
          author {
            name
            username
          }
          comments {
            id
            message {
              message
            }
            createdAt(formatString: "MMM DD YYYY")
            updatedAt(formatString: "MMM DD YYYY")
            name
            website
            email
            status
          }
          category {
            name
            url
            isSocialShare
            isComments
          }
          faQs {
            id
            title
            questions {
              contentful_id
              question
              answer {
                answer
              }
            }
          }
        }
      }
      allContentfulAuthor {
        nodes {
          name
          username
          bio {
            bio
          }
          profilePic {
            gatsbyImageData
          }
          linkedinUrl
          blog {
            id
            title
            slug
            heroImage {
              gatsbyImageData
            }
            category {
              name
              url
            }
            updatedAt(formatString: "MMM DD YYYY")
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
      path:
        blog.category.url === "/"
          ? `${blog.category.url}${blog.slug}`
          : `/${blog.category.url}/${blog.slug}`,
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
