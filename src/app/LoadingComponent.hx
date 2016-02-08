package app;
import doom.Node;
import Doom.*;
class LoadingComponent extends Doom {
	
	override public function render() {
		return p(["class" => "mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active"]);
	}
	
}