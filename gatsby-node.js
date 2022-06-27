// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = `
//   type ContentfulAsset implements Node {
//     contentful_id: String!
//     id: ID
//     gatsbyImageData: JSON
//   }

//   type contentfulPopUpDescriptionTextNode implements Node {
//     description: String
//   }

//   type ContentfulBanner implements Node {
//     id: ID
//     title: String
//     banner: ContentfulAsset
//     slug: String
//   }

//   type ContentfulLink implements Node {
//     id: ID
//     title: String
//     slug: String
//     newTab: Boolean
//   }

//   type contentfulTableTableJsonNode implements Node {
//     tableData: [[String]]
//   }

//   type ContentfulTable implements Node {
//     id: ID
//     table: contentfulTableTableJsonNode
//   }

//   union ContentfulAssetContentfulBannerContentfulLinkContentfulTableUnion = ContentfulAsset | ContentfulBanner | ContentfulLink | ContentfulTable

//   type ContentfulBlogDescription implements Node {
//     raw: String
//     references: [ContentfulAssetContentfulBannerContentfulLinkContentfulTableUnion]
//   }

//   type ContentfulPopUp implements Node {
//     id: String
//     title: String
//     description: contentfulPopUpDescriptionTextNode
//     buttonText: String
//     slug: String
//     banner: ContentfulAsset
//   }

//     type ContentfulBlog implements Node {
//       popUp: ContentfulPopUp
//       description: ContentfulBlogDescription
//      }
//   `;
//   createTypes(typeDefs);
// };

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
          title
          file {
            fileName
          }
        }
        createdAt(formatString: "MMM DD YYYY")
        updatedAt(formatString: "MMM DD YYYY")
        description {
          raw
          references {
            ... on ContentfulTable {
              id
              align
              table {
                tableData
              }
            }
            ... on ContentfulAsset {
              contentful_id
              gatsbyImageData(placeholder: TRACED_SVG)
              title
              file {
                fileName
              }
            }
            ... on ContentfulCustomAsset {
              media {
                gatsbyImageData
                title
                file {
                  fileName
                }
              }
              align
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
        relatedPostsTag
        numberOfRelatedPosts
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
          title
          file {
            fileName
          }
        }
        linkedinUrl
        blog {
          id
          title
          slug
          heroImage {
            gatsbyImageData
            title
            file {
              fileName
            }
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
        blog.category?.url === "/"
          ? `${blog.category.url}${blog.slug}`
          : `/${blog.category?.url}/${blog.slug}`,
      component: require.resolve(`./src/Template/Blog.tsx`),
      context: {
        data: blog,
        tag: blog.relatedPostsTag ?? "",
        noOfPost: blog.numberOfRelatedPosts ?? 2
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
