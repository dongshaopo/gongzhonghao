import Vue from "vue";
import FooterBtn from "./FooterBtn";
function globalComponent() {
  if (globalComponent.installed) {
    return;
  }
  Vue.component("footerBtn", FooterBtn);
}
export default globalComponent;
