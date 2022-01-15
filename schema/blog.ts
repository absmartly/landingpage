module.exports = function (migration) {
  const blog = migration.createContentType("blog").name("Blog");
  blog.createField("title").type("Symbol").name("Title").required(true);
  blog
    .createField("slug")
    .type("Symbol")
    .required(true)
    .name("Slug")
    .validations([{ unique: true }]);
  blog
    .createField("description")
    .type("RichText")
    .name("Description")
    .required(true);
  blog.createField("type").type("Symbol").name("Type").required(true);
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
  blog.createField("seoDescription").type("Text").name("SEO Description");

  blog.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingField: "title",
  });
  migration.editContentType("blog").displayField("title");
};
