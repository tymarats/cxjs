import { Widget, VDOM } from '../ui/Widget';
import { registerIcon, registerIconFactory, clearIcons, unregisterIcon, renderIcon } from './icons/registry';
import "./icons/index";


export class Icon extends Widget {
   declareData() {
      super.declareData(...arguments, {
         name: undefined,
         className: {structured: true},
         class: {structured: true},
         style: {structured: true},
      })
   }

   render(context, instance, key) {
      let {data} = instance;
      return renderIcon(data.name, {
         key: key,
         className: data.classNames,
         style: data.style
      });
   }

   static register(name, icon, defaultIcon = false) {
      return registerIcon(name, icon, defaultIcon);
   }

   static unregister(...args) {
      return unregisterIcon(...args);
   }

   static render(name, props) {
      return renderIcon(name, props);
   }

   static clear() {
      return clearIcons();
   }

   static registerFactory(factory) {
      return registerIconFactory(factory);
   }
}

Icon.prototype.baseClass = "icon";

Widget.alias('icon', Icon);
