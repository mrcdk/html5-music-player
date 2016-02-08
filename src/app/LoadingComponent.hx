package app;
import doom.Node;
import Doom.*;
import dots.Query;
import js.html.Element;
class LoadingComponent extends Doom {
	
	@:state(false) var visible:Bool;
	
	override public function render() {
		return div(["class" => 'mdl-progress mdl-js-progress mdl-progress--indeterminate ${visible?"is-active":""}', "id" => "loading-progress"]);
	}
	
}