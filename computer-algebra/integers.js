//Функции для работы с натуральными числами
//Nekrasov Nikita

var integer = {};

integer.abs = function(a)
{
    var b = a.createCopy();
    b.positive = true;

    return b;
}

integer.isPositive = function(a)
{
    return a.positive;
}

integer.multbyminusone = function(a)
{
    var b = a.createCopy();
    b.positive = !b.positive;

    return b;
}
integer.plus = function(a, b)
{
    var res;

    if(a.positive != b.positive)
    {
        var greater;
        var lesser;
        var comp = natural.compare(a, b);
        if(comp == 2)
        {
            greater = a;
            lesser = b;
        }
        else if(comp == 1)
        {
            greater = b;
            lesser = a;
        }
        else
        {
            return new longNumber("");
        }

        res = natural.minus(greater, lesser);
        res.positive = greater.positive;
    }
    else
    {
        res = natural.plus(a, b);
        res.positive = a.positive;
    }

    return res;
}

integer.minus = function(a, b)
{
    var m = b.createCopy();
    m.positive = !m.positive;

    var res = integer.plus(a, m);

    return res;
}

integer.multiply = function(a, b)
{
    var res = natural.multiply(a, b);
    res.positive = a.positive == b.positive;
    return res;
}

integer.div = function(a, b)
{
    var res = natural.div(a, b);
    res.positive = a.positive == b.positive;

    return res;
}

integer.mod = function(a, b)
{
    var res = natural.mod(a, b);
    return res;
}