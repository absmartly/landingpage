module.exports = function (migration) {
  const comments = migration.createContentType("comments1").name("Comments");
  comments.createField("name").type("Symbol").name("Name").required(true);
  comments
    .createField("email")
    .type("Symbol")
    .name("Email")
    .required(true)
    .validations([
      {
        regexp: {
          pattern: "^\\w[\\w.-]*@([\\w-]+\\.)+[\\w-]+$",
          flags: null,
        },
      },
    ]);
  comments
    .createField("website")
    .type("Symbol")
    .name("Website")
    .required(true)
    .validations([
      {
        regexp: {
          pattern:
            "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: null,
        },
      },
    ]);
  comments.createField("message").type("Text").name("Message").required(true);
  comments
    .createField("replies")
    .type("Array")
    .name("Replies")
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: ["comments1"],
        },
      ],
      linkType: "Entry",
    });
  comments
    .createField("status")
    .type("Symbol")
    .name("Status")
    .required(true)
    .validations([
      {
        in: ["UnApproved", "Approved", "Rejected"],
      },
    ])
    .defaultValue({
      "en-US": "UnApproved",
    });
  migration.editContentType("comments1").displayField("name");

  const author = migration.createContentType("author").name("Author");
  author.createField("name").type("Symbol").name("Name").required(true);
  author
    .createField("username")
    .type("Symbol")
    .required(true)
    .name("Username")
    .validations([{ unique: true }]);

  author.changeFieldControl("username", "builtin", "slugEditor", {
    trackingField: "name",
  });
  migration.editContentType("author").displayField("name");

  const category = migration.createContentType("category").name("Category");
  category.createField("name").type("Symbol").name("Name").required(true);
  category
    .createField("slug")
    .type("Symbol")
    .required(true)
    .name("Slug")
    .validations([{ unique: true }]);

  category.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingField: "name",
  });
  migration.editContentType("category").displayField("name");

  const blog = migration.createContentType("blog").name("Blog");
  blog.createField("title").type("Symbol").name("Title").required(true);
  blog
    .createField("slug")
    .type("Symbol")
    .required(true)
    .name("Slug")
    .validations([{ unique: true }]);
  blog
    .createField("heroImage")
    .type("Link")
    .name("Hero Image")
    .validations([
      {
        linkMimetypeGroup: ["image"],
      },
    ]);
  blog
    .createField("description")
    .type("RichText")
    .name("Description")
    .required(true);
  blog.createField("type").type("Symbol").name("Type").required(true);
  blog.createField("seoTitle").type("Symbol").name("SEO Title").required(true);
  blog.createField("seoDescription").type("Text").name("SEO Description");
  blog
    .createField("tags")
    .type("Array")
    .items({ type: "Symbol" })
    .name("Tags")
    .required(true);
  blog
    .createField("author")
    .type("Link")
    .name("Author")
    .linkType("Entry")
    .required(true)
    .validations([{ linkContentType: ["author"] }]);
  blog
    .createField("category")
    .type("Link")
    .name("Category")
    .linkType("Entry")
    .required(true)
    .validations([{ linkContentType: ["category"] }]);
  blog
    .createField("comments1")
    .type("Array")
    .name("Comments")
    .linkType("Entry")
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: ["comments1"],
        },
      ],
      linkType: "Entry",
    })
    .required(true);
  blog.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingField: "title",
  });
  migration.editContentType("blog").displayField("title");
};
