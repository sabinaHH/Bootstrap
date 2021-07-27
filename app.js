setTimeout(function () {
  console.log("script loaded");
  $("body").on("click", ".next", function () {
    var id = $(".content:visible").data("id");
    var nextId = $(".content:visible").data("id") + 1;
    $('[data-id="' + id + '"]').hide();
    $('[data-id="' + nextId + '"]').show();
    document.querySelector(".btn__text-dynamic").classList.add("test1");

    console.log($(".back:hidden").length);
    if ($(".back:hidden").length == 1) {
      console.log("Show button");
      $(".back").show();
    }

    if (nextId == 4) {
      $(".content-holder").hide();
      $(".end").show();
    }
  });

  $("body").on("click", ".back", function () {
    document.querySelector(".btn__text-dynamic").classList.remove("test1");

    var id = $(".content:visible").data("id");
    var prevId = $(".content:visible").data("id") - 1;
    $('[data-id="' + id + '"]').hide();
    $('[data-id="' + prevId + '"]').show();

    if (prevId == 1) {
      console.log("Hide button");
      $(".back").hide();
    }
  });

  $("body").on("click", ".edit-previous", function () {
    $(".end").hide();
    $(".content-holder").show();
    $("#content-3").show();
  });

  // var button = document.querySelector(".btn__text-dynamic");

  // button.addEventListener("click", function (e) {
  //   console.log(e.target);
  //   document.querySelector(".btn__text-dynamic").classList.add("test1");
  // });
}, 2000);
