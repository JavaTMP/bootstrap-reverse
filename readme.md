# bootstrap-reverse
Bootstrap 4 RTL for Right to left directional languages like Arabic,Persian,Hebrew and Urdu.

## Which languages are written right-to-left (RTL)?
The following W3C web page provides a good information for RTL languages http://www.i18nguy.com/temp/rtl.html.

## Installation Using NPM
```
npm install bootstrap-reverse
```

## Building from The source
Make sure node.js and git client are locally installed on your machine and then run the following commands:
```
cd bootstrap-reverse
npm install
gulp
```

## How-to
If your website supports:

Case | Files To Use | Note
------------------------ | ----------------- | -------------------------
Only Left-to-Right languages  | Don't use this package at all | The default bootstrap layout is left-to-right, so you don't need this package at all.
Only Right-to-Left languages | Use foundation version only  | Foundation version will not reset any class with name left/right and r/l.
Multilingual and Uses BOTH Direction like English and Arabic, And You don't care for semantic error  | Use bootstrap-reverse version | This version update all bootstrap classes relating to LEFT/RIGHT direction, BUT provides semantic errors and it is best to start stlying your site from English first.
Multilingual and Uses BOTH Direction like English and Arabic, And You care for semantic error but You don't care for adding new unofficial classes  | Use bootstrap-reverse-extender version | This version will introduce new classes for every bootstrap class containing left or right with start/end alternatives.

## Major Issues
- Dropdown width and positions. we solve the dropdown issues by the following Javascript hack:
```js
$('.dropdown, .btn-group, .input-group-prepend, .input-group-append').on('shown.bs.dropdown', function () {
    var dropDown = $(this).find(".dropdown-menu");
    setTimeout(function () {
        var previous =
                dropDown.css("-webkit-transform") ||
                dropDown.css("-moz-transform") ||
                dropDown.css("-ms-transform") ||
                dropDown.css("-o-transform") ||
                dropDown.css("transform") ||
                "Either no transform set, or browser doesn't do getComputedStyle";
        var values = previous.split("(")[1];
        values = values.split(")")[0];
        values = values.split(", ");
        var x = 0;
        var y = parseInt(values[5]);
        var z = 0;
        dropDown.css({transform: "translate3d(" + x + "px," + y + "px," + z + "px)", left: "auto", right: "auto"});
    }, 0);
});
```

## External And Automated Tools
- [postcss-rtl](https://www.npmjs.com/package/postcss-rtl)

## Copyright and License
Bootstrap-reverse is copyrighted by [JavaTMP](http://www.javatmp.com) and licensed under [MIT license](https://github.com/JavaTMP/bootstrap-reverse/blob/master/LICENSE).
