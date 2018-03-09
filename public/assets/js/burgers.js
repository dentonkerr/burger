$(function () {

    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newBurgerState = {
            devoured: true
        };

        console.log(id);
        console.log(newBurger);
        console.log(newBurgerState);

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("Change devoured to " + newBurger);
                location.reload();
            }
            );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added New Burger");
                location.reload();
            }
            );
    });



});