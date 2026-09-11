import {
    createContainerMainElements,
    createElementDivWithTheSameIdAndClassName,
    createElementP,
    setElementClassNameById,
    setElementClassNameSameAsIdAndSetText
} from "../../common/function/commonFunctions.js";

import * as variablesFooter from "../../common/variable/footer/variablesFooter.js";
import * as variablesMain from "../../common/variable/main/variablesMain.js";

export class ViewFooter {

    createFooter() {
        this.createContainerMainFooter();
        this.createContainerFooterAuthor();
    }

    createContainerMainFooter() {
        createContainerMainElements(variablesMain.containerMainSectionFooter, variablesFooter.sectionFooter, variablesFooter.containerSectionFooter, variablesFooter.containerMainFooter);
        setElementClassNameById(variablesFooter.containerSectionFooter, variablesFooter.containerSectionFooter);
    }

    createContainerFooterAuthor() {
        createElementDivWithTheSameIdAndClassName(variablesFooter.containerMainFooter, variablesFooter.containerFooterAuthor);
        createElementP(variablesFooter.containerFooterAuthor, variablesFooter.footerAuthor);
        setElementClassNameSameAsIdAndSetText(variablesFooter.footerAuthor, variablesFooter.footerAuthorData);
    }
}