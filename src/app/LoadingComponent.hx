package app;
import doom.Node;
import Doom.*;
import dots.Query;
import js.html.Element;
class LoadingComponent extends Doom {
	
	@:state(false) var visible:Bool;

	override public function didMount() {
		//trace("loading mount");
	}
	
	override public function didRefresh() {
		//trace(element);
	}
	
	override public function didUnmount() {
		//trace("loading unmount");
	}
	
	override public function render() {
		return div(["id" => "loading-element", "class" => 'mdl-progress mdl-js-progress mdl-progress--indeterminate ${visible?"is-active":""}']);
	}
	
}