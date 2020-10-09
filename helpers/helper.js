export function getTemplate(path,context) {
    context.loadPartials({
        header: "../views/common/header.hbs",
        footer: "../views/common/footer.hbs"
    }).then(function () {
        this.partial(`../view/${path}`)
    })
}