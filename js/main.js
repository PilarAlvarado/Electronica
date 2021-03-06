(function($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function() {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $(".navbar .dropdown")
                    .on("mouseover", function() {
                        $(".dropdown-toggle", this).trigger("click");
                    })
                    .on("mouseout", function() {
                        $(".dropdown-toggle", this).trigger("click").blur();
                    });
            } else {
                $(".navbar .dropdown").off("mouseover").off("mouseout");
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // Header slider
    $(".header-slider").slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Product Slider 4 Column
    $(".product-slider-4").slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    // Product Slider 3 Column
    $(".product-slider-3").slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    // Product Detail Slider
    $(".product-slider-single").slick({
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".product-slider-single-nav",
    });
    $(".product-slider-single-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: ".product-slider-single",
    });

    // Review slider
    $(".review-slider").slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });

    // Widget slider
    $(".sidebar-slider").slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Quantity
    $(".qty button").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.hasClass("btn-plus")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    // Shipping address show hide
    $(".checkout #shipto").change(function() {
        if ($(this).is(":checked")) {
            $(".checkout .shipping-address").slideDown();
        } else {
            $(".checkout .shipping-address").slideUp();
        }
    });

    // Payment methods show hide
    $(".checkout .payment-method .custom-control-input").change(function() {
        if ($(this).prop("checked")) {
            var checkbox_id = $(this).attr("id");
            $(".checkout .payment-method .payment-content").slideUp();
            $("#" + checkbox_id + "-show").slideDown();
        }
    });
})(jQuery);

//Form
// Inhabilita env??os de formulario si hay campos inv??lidos
(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            // Aqui se dice cuales son las formas a las que se les quiere agregar validacion
            var forms = document.getElementsByClassName("needs-validation");
            // Hace loop y previene env??o
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "input",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                            alert("Completa todos los campos correctamente");
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === true) {
                            alert("Enviado");
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();

var password = document.getElementById("contra"),
    confirm_password = document.getElementById("confcontra");

function validatePassword() {
    if (!password.checkValidity()) {
        confcontra.disabled = true;
    } else {
        confcontra.disabled = false;
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity("");
        }
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// api