module.exports = function (migration) {
  const blog = migration.createContentType("blog").name("Blog");
  blog.createField("title").type("Symbol").name("Title").required(true);
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

  migration.editContentType("blog").displayField("title");
};
