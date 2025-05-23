function setFunctionOnclick(elementId, functionNameOnclick) {
    document.getElementById(elementId).setAttribute("onclick", functionNameOnclick + "(this.id)");
}

function removeFunctionOnclick(elementId) {
    document.getElementById(elementId).removeAttribute("onclick");
}

function createContainerMainElements(containerMainSectionName, sectionName, containerSectionName, containerSectionMainName) {
    createElementDiv(containerMainSectionName, containerSectionName)

    let newDiv2 = document.createElement("div");
    let mainElem = document.getElementById(containerSectionName);
    mainElem.append(newDiv2);
    newDiv2.setAttribute("id", containerSectionMainName);
    newDiv2.classList.add((containerSectionMainName));
}

function createElement(parentId, childId, elementKind) {
    let newElement = document.createElement(elementKind);
    let mainElement = document.getElementById(parentId);
    mainElement.append(newElement);
    newElement.setAttribute("id", childId);
}

function createElementDiv(parentId, childId) {
    createElement(parentId, childId, "div")
}

function createElementButton(parentId, childId) {
    createElement(parentId, childId, "button");
}

function createElementP(parentId, childId) {
    createElement(parentId, childId, "p");
}

function setElementClassName(elementId, className) {
    document.getElementById(elementId).classList.add(className);
}

function removeElementClassName(elementId, className) {
    document.getElementById(elementId).classList.remove(className);
}

function createElementDivWithTheSameValueForIdAndClassName(parentId, elementIdAndClassName) {
    createElementDiv(parentId, elementIdAndClassName);
    setElementClassName(elementIdAndClassName, elementIdAndClassName);
}

function removeElementsById(elementId) {
    let element = document.getElementById(elementId);
    if (element !== null) {
        element.remove();
    }
}

function isElementsExistById(elementId) {
    let element = document.getElementById(elementId);
    let result = false;
    if (element !== null)
        result = true;
    return result;
}

function setElementTextByClassName(className, text) {
    document.getElementsByClassName(className)[0].innerHTML = text;
}

function setElementTextById(elementId, text) {
    document.getElementById(elementId).innerHTML = text;
}

function setNumberAsString(number) {
    return number.toString();
}

function getElementValue(clickedId) {
    let element = document.getElementById(clickedId);
    return element.getAttribute("value");
}