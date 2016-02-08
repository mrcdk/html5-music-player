package app;

import Doom.*;
import doom.Node;

/**
 * ...
 * @author MrCdK
 */
@:children(none)
class HeaderComponent extends Doom {

	@:state public var title:String;
	
	override public function render() {
		return header(["class" => "demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"], [
			div(["class" => "mdl-layout__header-row"], [
				div(["class" => "mdl-layout-title"], title),
			])
		]);
	}
}