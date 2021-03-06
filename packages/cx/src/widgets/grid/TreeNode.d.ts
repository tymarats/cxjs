import * as Cx from '../../core';

interface TreeNodeProps extends Cx.WidgetProps {

   level?: Cx.NumberProp,
   expanded?: Cx.BooleanProp,
   leaf?: Cx.BooleanProp,
   text?: Cx.StringProp,
   loading?: Cx.BooleanProp,

   /** Base CSS class to be applied to the element. Defaults to 'treenode'. */
   baseClass?: string
   
}

export class TreeNode extends Cx.Widget<TreeNodeProps> {}
