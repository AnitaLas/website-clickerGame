export function valueToString(value) {
    return value.toString();
}

export function getElementById(elementId) {
    return document.getElementById(elementId);
}

export function removeElementById(elementId) {
    let element = getElementById(elementId);
    if (element !== null) {
        element.remove();
    }
}

export function setElementClassNameById(elementId, className) {
    getElementById(elementId).classList.add(className);
}

export function getElementsByClassName(className) {
    return document.getElementsByClassName(className);
}

export function removeElementClassNameById(elementId, className) {
    getElementById(elementId).classList.remove(className);
}

export function createElement(parentId, childId, elementKind) {
    let newElement = document.createElement(elementKind);
    getElementById(parentId).append(newElement);
    newElement.setAttribute("id", childId);
}

export function createElementButton(parentId, childId) {
    createElement(parentId, childId, "button");
}

export function createElementP(parentId, childId) {
    createElement(parentId, childId, "p");
}

export function createElementDiv(parentId, childId) {
    createElement(parentId, childId, "div");
}

export function createElementDivWithIdAndSetClassName(parentId, childId, className) {
    createElementDiv(parentId, childId);
    setElementClassNameById(childId, className);
}

export function createElementDivWithTheSameIdAndClassName(parentId, elementIdAndClassName) {
    createElementDiv(parentId, elementIdAndClassName);
    setElementClassNameById(elementIdAndClassName, elementIdAndClassName);
}

export function createElementDivAnaDivChild(parentId, childId, grandChildId) {
    createElementDiv(parentId, childId);
    createElementDiv(childId, grandChildId);
}

export function createElementButtonAndSetFunctionOnclick(parentId, childId, functionOnclickName) {
    createElementButton(parentId, childId);
    setFunctionOnclick(childId, functionOnclickName);
}

export function setElementClassNameSameAsIdAndSetText(elementId, text) {
    setElementClassNameById(elementId, elementId);
    setElementTextById(elementId, text);
}

export function setElementClassNamedAndText(elementId, className, text) {
    setElementClassNameById(elementId, className);
    setElementTextById(elementId, text);
}

export function setElementClassNames(elementId, classNameOne, classNameTwo) {
    setElementClassNameById(elementId, classNameTwo);
    setElementClassNameById(elementId, classNameTwo);
}

export function isElementsExistById(elementId) {
    let element = getElementById(elementId);
    let result = false;
    if (element !== null)
        result = true;
    return result;
}

export function setElementTextByClassName(className, text) {
    getElementsByClassName(className)[0].innerHTML = text;
}

export function setElementTextById(elementId, text) {
    getElementById(elementId).innerHTML = text;
}

export function setElementAttributeValueById(elementId, value) {
    getElementById(elementId).value = valueToString(value);
}

export function getElementAttributeValueById(elementId) {
    return getElementById(elementId).getAttribute("value");
}

export function setFunctionOnclick(elementId, functionNameOnclick) {
    getElementById(elementId).setAttribute("onclick", functionNameOnclick + "(this.id)");
}

export function removeFunctionOnclick(elementId) {
    getElementById(elementId).removeAttribute("onclick");
}

export function setElementStyletAsGrid(elementId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns) {
    let element = getElementById(elementId);
    element.style.display = "grid";

    element.style.gridRow = valueToString(gridRowStartNumber);
    element.style.gridColumn = valueToString(gridColumnStartNumber);

    element.style.gridRowEnd = valueToString(gridRowEndNumber);
    element.style.gridColumnEnd = valueToString(gridColumnEndNumber);

    setElementStyleGridTemplateRows(elementId, gridTemplateRows);
    setElementStyleGridTemplateColumns(elementId, gridTemplateColumns);
}

export function setElementStyleGridTemplateRows(elementId, gridTemplateRowsPattern) {
    getElementById(elementId).style.gridTemplateRows = valueToString(gridTemplateRowsPattern);
}

export function setElementStyleGridTemplateColumns(elementId, gridTemplateColumnsPattern) {
    getElementById(elementId).style.gridTemplateColumns = valueToString(gridTemplateColumnsPattern);
}

export function createContainerMainElements(containerMainSectionName, sectionName, containerSectionName, containerSectionMainName) {
    createElementDiv(containerMainSectionName, containerSectionName)
    createElementDivWithTheSameIdAndClassName(containerSectionName, containerSectionMainName);
}

export function addEventListenerOnClickButton(buttonId, functionToCall, context) {
    const button = getElementById(buttonId);
    const buttonClickEvent = (event) => {
        functionToCall.call(context, event);
    };
    button.addEventListener("click", buttonClickEvent);
    return buttonClickEvent;
}

export function removeEventListenerOnClickButton(buttonId, buttonClick) {
    const button = getElementById(buttonId);
    button.removeEventListener(
        "click",
        buttonClick
    );
}