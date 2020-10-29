import Vue from "vue";
import FooterBtn from "./FooterBtn";
import Empty from "./Empty";
function globalComponent() {
  if (globalComponent.installed) {
    return;
  }
  Vue.component("footerBtn", FooterBtn);
  Vue.component("Empty", Empty);
}
export default globalComponent;
