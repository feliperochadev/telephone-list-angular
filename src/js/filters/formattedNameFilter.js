angular.module("telephoneList").filter("formattedName", function()
{
    return function (input)
    {
        var listNames = input.split(" ");
        var formattedListNames = listNames.map(function (name)
        {
            if(/(da|de)/.test(name)) return name;
            return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
        });
        return formattedListNames.join(" ");
    }
});