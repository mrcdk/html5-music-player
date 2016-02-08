package app;

import Doom.*;
import doom.Node;

/**
 * ...
 * @author MrCdK
 */
class HeaderComponent extends Doom {

	@:state public var title:String;
	
	override public function render() {
		return header(["class" => "demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"], [
			div(["class" => "mdl-layout__header-row"], [
				div(["class" => "mdl-layout-title"], title),
				div(["class" => "mdl-layout-spacer"]),
				button(["id" => "hdrbtn", "class" => "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"], i(["class" => "material-icons"], "more_vert")),
				ul(["for" => "hdrbtn", "class" => "mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right"], [
					li(["class" => "mdl-menu__item"], a(["class" => "mdl-button mdl-js-button mdl-button--primary", "href" => "https://twitter.com/jdbaudi", "target" => "_blank"], "Twitter")),
					li(["class" => "mdl-menu__item"], a(["class" => "mdl-button mdl-js-button mdl-button--primary", "href" => "https://github.com/mrcdk", "target" => "_blank"], "Github")),
				]),
				
				
				/*
				nav(["class" => "mdl-navigation"], [
					a(["class" => "mdl-button mdl-js-button mdl-button--primary", "href" => "https://twitter.com/jdbaudi", "target" => "_blank"], "Twitter"),
					a(["class" => "mdl-button mdl-js-button mdl-button--primary", "href" => "https://github.com/mrcdk", "target" => "_blank"], "Github"),
				]),
				*/
			])
		].concat(children));
	}
}