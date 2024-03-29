/**
 * plugin javascript
 */
(function ($) {
  $(function () {
    $("#dismiss").click(function () {
      $(this).parents("div.updated:first").slideUp();
      $.post(
        "admin.php?page=pmxi-admin-settings&action=dismiss",
        { dismiss: true ,
          security: wp_all_import_security },
        function (data) {},
        "html"
      );
    });

    $("#dismiss_manage_top").click(function () {
      $(this).parents("div.updated:first").slideUp();
      $.post(
        "admin.php?page=pmxi-admin-settings&action=dismiss_manage_top",
        { dismiss: true ,
          security: wp_all_import_security },
        function (data) {},
        "json"
      );
    });

    $("#dismiss_manage_bottom").click(function () {
      $(this).parents("div.updated_bottom").slideUp();
      $.post(
        "admin.php?page=pmxi-admin-settings&action=dismiss_manage_bottom",
        { dismiss: true,
          security: wp_all_import_security },
        function (data) {},
        "json"
      );
    });

    $(".wpallimport-dismissible")
      .find("button.notice-dismiss")
      .on("click", function (e) {
        var request = {
          action: "dismiss_notifications",
          security: wp_all_import_security,
          addon: $(this).parent("div:first").attr("rel"),
        };

        var ths = $(this);

        $.ajax({
          type: "POST",
          url: ajaxurl,
          data: request,
          success: function (response) {},
          dataType: "json",
        });
      });
  });
})(jQuery);
