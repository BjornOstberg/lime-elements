import { ListItem } from '@limetech/lime-elements';

export interface DockItem extends ListItem {
    /**
     * Determines whether a button should be a part of the flow,
     * or should be an independent button visually located on the side.
     */
    isDynamic?: boolean;

    /**
     * Background color of selected button.
     */
    selectedColor?: string;

    /**
     * Fill color of the icon on the button,
     * when it is neither selected nor passed.
     */
    iconColor?: string;

    isPopover?: boolean;

    isCollapsible?: boolean;
}
