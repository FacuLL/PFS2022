function showCurrentChilds() {
    var root = document.getElementById('root');
    var currentlocations = domlocation.split('/');
    currentlocations.shift();
    currentlocations.shift();
    var element = root;
    var list = '<li><a id="goBack" href="javascript: goBack()">Go Back</a></li>';
    if(currentlocations.length != 0) {
        for (let i = 0; i < currentlocations.length; i++) {
            var elementid = currentlocations[i].split("('")[1].split("')")[0];
            console.log(elementid)
            element = element.querySelector("#" + elementid);
        }
        document.getElementById('deleteChild').style.display = "block";
    }
    else {
        document.getElementById('deleteChild').style.display = "none";
    }
    var children = element.children;
    if (children.length > 0) {
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child.nodeType == 1) {
                let tag = child.tagName;
                let attributes = child.attributes;
                list += '<li>' + '<a href="javascript: goToChild(\''+ tag +'\', \'' + child.getAttribute("id") + '\')">' + tag + '</a>'
                if(attributes.length > 0) {
                    list += ' (ID "' + child.getAttribute("id") + '")';
                }
                list += "</li>"
            }
        }
    }
    else {
        list += "<li>Empty</li>";
    }
    document.getElementById('childList').innerHTML = list;
}

function goToChild(tag, id) {
    domlocation = domlocation += "/" + tag + "('" + id + "')";
    document.getElementById('location').innerHTML = domlocation;
    showCurrentChilds();
}

function goBack() {
    var newlocation = domlocation.split('/');
    if(newlocation[newlocation.length-1] != "body") {
        newlocation.pop();
        domlocation = newlocation.join('/');
        document.getElementById('location').innerHTML = domlocation;
        showCurrentChilds();
    }
}

var allidlist = ['container', 'editor', 'editorTitle', 'editorContainer', 'editorInfo', 'location', 'childList', 'editMenu', 'textareas', 'tag', 'newchildid', 'atributes', 'content', 'editButtons', 'addChild', 'separador', 'visualizer', 'visualizerTitle', 'root', 'errordiv', 'errortext', 'infolink'];
function newChild() {
    var tag = document.getElementById('tag').value;
    var id = document.getElementById('newchildid').value;
    var attributes = document.getElementById('atributes').value;
    var content = document.getElementById('content').value;

    if (!isEmpty(tag)) {
        if(!isEmpty(id)) {
            var uniqueid = true;
            for (let i = 0; i < allidlist.length; i++) {
                if(id == allidlist[i]) {
                    uniqueid = false;
                }
            }
            if(uniqueid) {
                var locations = domlocation.split('/')
                var currentlocation = locations[locations.length - 1];
                if(currentlocation != "body") {
                    var currentid = currentlocation.split("('")[1].split("')")[0];
                    var newitem = document.createElement(tag).setAttribute('id', id);
                    if(!isEmpty(attributes)) {
                        var separatedattributes = attributes.split(",")
                        for (let i = 0; i < separatedattributes.length; i++) {
                            var attributename = separatedattributes[i].split("=")[0];
                            var attributevalue = separatedattributes[i].split("=")[1].split('"')[1];
                            if(attributename != "id") {
                                newitem.setAttribute(attributename, attributevalue);
                            }
                        }
                    }
                    document.getElementById(currentid).appendChild(newitem)
                    allidlist.push(id);
                    document.getElementById('errortext').innerHTML = '';
                    showCurrentChilds();
                }
                else {
                    var newitem = document.createElement(tag);
                    newitem.innerHTML = content;
                    newitem.setAttribute('id', id);
                    if(!isEmpty(attributes)) {
                        var separatedattributes = attributes.split(",")
                        for (let i = 0; i < separatedattributes.length; i++) {
                            var attributename = separatedattributes[i].split("=")[0];
                            var attributevalue = separatedattributes[i].split("=")[1].split('"')[1];
                            newitem.setAttribute(attributename, attributevalue);
                        }
                    }
                    document.getElementById('root').appendChild(newitem);
                    allidlist.push(id);
                    document.getElementById('errortext').innerHTML = '';
                    showCurrentChilds();
                }
            }
            else {
                document.getElementById('errortext').innerHTML = 'El id ya esta en uso o no esta permitido';
            }
        }
        else {
            document.getElementById('errortext').innerHTML = 'Debes ingresar un id';
        }
    }
    else {
        document.getElementById('errortext').innerHTML = 'Debes ingresar un tag';
    }
}

function isEmpty(text) {
    if(text.replace(/^\s+|\s+$/g,"") == "") {
        return true;
    };
    return false;
}

function deleteItem() {
    var locations = domlocation.split('/')
    var currentlocation = locations[locations.length - 1];
    if(currentlocation != "body") {
        var currentid = currentlocation.split("('")[1].split("')")[0];
        document.getElementById(currentid).remove();
        locations.pop();
        domlocation = locations.join('/')
        document.getElementById('location').innerHTML = domlocation;
        var idIndex = allidlist.indexOf(currentid);
        allidlist.splice(idIndex, 1);
        showCurrentChilds();
        document.getElementById('errortext').innerHTML = '';
    }
    else {
        document.getElementById('errortext').innerHTML = 'No se puede borrar el body';
    }
}

var domlocation = "DOM:/body";
document.getElementById('location').innerHTML = domlocation;
showCurrentChilds();

document.getElementById('addChild').addEventListener('click', newChild)
document.getElementById('deleteChild').addEventListener('click', deleteItem)