import { ListItem } from '@limetech/lime-elements';

export interface DockItem extends ListItem {
    /**
     * Determines whether a step should be a part of the flow,
     * or should be an independent step visually located on the side.
     */
    isDynamic?: boolean;

    /**
     * Background color of selected step.
     */
    selectedColor?: string;



    /**
     * Fill color of the icon on the step,
     * when it is neither selected nor passed.
     */
    iconColor?: string;
}
