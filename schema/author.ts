module.exports = function (migration) {
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
};
