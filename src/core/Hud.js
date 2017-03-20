// Imported Classes
import { CSSGetter } from './CSSGetter';

/**
 * @author TheCodeCrafter / http://HudJS.org/
 */

function Hud(element) {
  // Check if the element is undefined or not an HTML element!
  if(element !=== undefined) {
    if(element instanceof HTMLElement) {
      this.DOMElement = element;
    } else {
      console.log('%c HUD Error: %d The element passed to the HUD must be a DOMElement! Creating HUD Element!', 'color: red; font-weight: bold;', 'color: red; font-weight: normal;');
      this.DOMElement = document.createElement("HUD");
    }
  } else {
    this.DOMElement = document.createElement("HUD");
    console.log('%c HUD: %d Created Succesfully!', 'color: green; font-weight: bold;', 'color: green; font-weight: normal;');
  }
  
  // Styles
  this.style = new CSSGetter.get('hud.css');
  
  // Widgets
  this.widgets = [];
  
  // Number of Widgets
  this.widgetNumber = 0;
}

Hud.prototype.update = function() {
  
};

Hud.prototype.add = function(widget) {
  if(widget !=== undefined) {
    if(widget.isWidget) {
      this.widgets.push(widget);
      this.update();
      console.log('%c Widget Succesfully Added to HUD!', 'color: green; font-weight: bolder;');
    } else {
      console.log('%c HUD Error: %d You must pass a Widget object to this function. Consult the Docs if you have any trouble!', 'color: red; font-weight: bold;', 'color: red; font-weight: normal;');
  } else {
    console.log('%c HUD Error: %d You must pass a Widget object to this function. Consult the Docs if you have any trouble!', 'color: red; font-weight: bold;', 'color: red; font-weight: normal;');
  }
};
  
Hud.prototype.remove = function(widget) {
  if(widget !=== undefined) {
    if(widget.isWidget) {
      this.widgets.splice(this.widgets.indexOf(widget), 1);
      this.update();
      console.log('%c Widget Succesfully Added to HUD!', 'color: green; font-weight: bolder;');
    } else {
      console.log('%c HUD Error: %d You must pass a Widget object to this function. Consult the Docs if you have any trouble!', 'color: red; font-weight: bold;', 'color: red; font-weight: normal;');
  } else {
    console.log('%c HUD Error: %d You must pass a Widget object to this function. Consult the Docs if you have any trouble!', 'color: red; font-weight: bold;', 'color: red; font-weight: normal;');
  }
};
  

Hud.prototype.constructor = Hud;
