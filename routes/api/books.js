// api/books router
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

// api/books/:id router
router.route("/:id")
    .delete(bookController.remove)

module.exports = router;