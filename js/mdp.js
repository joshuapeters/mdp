/**
 * Created by Josh on 1/21/2017.
 */

String.prototype.capitalize = function()
{
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function get_mdp()
{
    var my_trace = tracery.createGrammar(mdp_grammar);
    var text = my_trace.flatten("#origin#");
    return fix_ing_modifier(text);
}

function reload()
{

    var buzzword = document.getElementById("mdp-main");
    buzzword.innerText = get_mdp();
}

function load()
{
    document.getElementById("header-text").innerText = "Making shitty memes about the scene so you don't have to.";
    reload();
}

function fix_ing_modifier(text)
{
    return text.replace("eing", "ing");
}


document.onload += load();
