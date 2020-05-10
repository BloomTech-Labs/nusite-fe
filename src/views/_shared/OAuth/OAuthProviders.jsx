import L_Default from "../../../images/OAuth-Images/LinkedIn-Default.png";
import L_Hover from "../../../images/OAuth-Images/LinkedIn-Hover.png";
import L_Active from "../../../images/OAuth-Images/LinkedIn-Active.png";

import G_Default from "../../../images/OAuth-Images/Google-Default.png";
import G_Hover from "../../../images/OAuth-Images/Google-Hover.png";
import G_Active from "../../../images/OAuth-Images/Google-Active.png";

class Provider {
   constructor(...images) {
      this.default = images[0];
      this.hover = images[1];
      this.active = images[2];
   }
   getDefault() {
      return this.default;
   }
   getHover() {
      return this.hover;
   }
   getActive() {
      return this.active;
   }
}

export const LinkedIn = new Provider(L_Default, L_Hover, L_Active);
export const Google = new Provider(G_Default, G_Hover, G_Active);
