import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
} from '@stencil/core';
import { DockItem } from './dock.types';

/**
 * @exampleComponent limel-example-dock-basic
 */
@Component({
    tag: 'limel-dock',
    shadow: true,
    styleUrl: 'dock.scss',
})

// whole menu
export class Dock {
    @Element()
    public element: HTMLLimelDockElement;

    /**
     * What flow items to render
     */
    @Prop()
    public dockItems: DockItem[] = [];

    /**
     * Fired when a new value has been selected from the progress flow
     */
    @Event()
    public change: EventEmitter<DockItem>;

    public componentDidRender() {
        this.scrollToSelectedItem();
    }

    public render() {
        const staticDockItems = this.dockItems.filter((item) => {
            return !item.isDynamic;
        });
        const dynamicDockItems = this.dockItems.filter((item) => {
            return item.isDynamic;
        });
        /* this.selectedItemIndex = staticDockItems.findIndex((item) => {
            return item.selected;
        });*/

        return [
            staticDockItems.map(this.renderRegularDockItem),
            dynamicDockItems.map(this.renderEndPhaseItem),
        ];
    }

    private renderRegularDockItem = (
        item: DockItem,
        index: number,
        array: DockItem[]
    ) => {
        return (
            <limel-dock-item
                class={{
                    'flow-item': true,
                    first: index === 0,
                    last: index === array.length - 1,
                    // passed: index < this.selectedItemIndex,
                    selected: item.selected,
                }}
                style={this.getItemStyle(item)}
                item={item}
                onInteract={this.handleDockItemClick(item)}
            />
        );
    };

    private renderEndPhaseItem = (
        item: DockItem,
        index: number,
        array: DockItem[]
    ) => {
        return (
            <limel-dock-item
                class={{
                    'flow-item': true,
                    'off-progress-item': true,
                    selected: item.selected,
                    'first-off-progress-item': index === 0,
                    'last-off-progress-item': index === array.length - 1,
                }}
                style={this.getItemStyle(item)}
                item={item}
                onInteract={this.handleDockItemClick(item)}
            />
        );
    };

    private handleDockItemClick = (dockItem: DockItem) => () => {
        if (!dockItem.selected) {
            this.change.emit(dockItem);
        }
    };

    private getItemStyle(dockItem: DockItem) {
        const style: any = {};
        if (dockItem?.selectedColor) {
            style['--progress-flow-step-background-color--selected'] =
                dockItem.selectedColor;
        }

        if (dockItem?.iconColor) {
            style['--progress-flow-icon-color--inactive'] = dockItem.iconColor;
        }

        return style;
    }

    private scrollToSelectedItem() {
        const selectedElement = this.getElementForSelectedItem();
        if (selectedElement) {
            const selectedItemLeftPosition =
                selectedElement.offsetLeft - this.element.offsetLeft;
            const selectedElementLeftPositionCentered =
                // eslint-disable-next-line no-magic-numbers
                selectedItemLeftPosition - this.element.offsetWidth / 2;
            const selectedElementCentered =
                selectedElementLeftPositionCentered +
                // eslint-disable-next-line no-magic-numbers
                selectedElement.offsetWidth / 2;
            this.element.scrollTo({
                behavior: 'smooth',
                left: selectedElementCentered,
            });
        }
    }

    private getElementForSelectedItem(): HTMLLimelDockItemElement {
        return this.element.shadowRoot.querySelector('.flow-item.selected');
    }
}
