angular.module("telephoneList").filter("ellipsis", function ()
{
    return function (input, size) {
        if(input.length <= size) return input;
        return input.substring(0, (size || 10)) + "...";
    }
});