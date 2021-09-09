import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
} from '@stencil/core';
import { DockItem } from '../dock.types';

/**
 * @private
 */
@Component({
    tag: 'limel-dock-item',
    shadow: false,
    styleUrl: 'dock-item.scss',
})

// buttons in a menu component
export class DockItemMenu {
    @Element()
    public element: HTMLLimelDockItemElement;

    /**
     * The flow item that should be rendered
     */
    @Prop()
    public item: DockItem = null;

    /**
     * Fired when clicking on the flow item
     */
    @Event()
    public interact: EventEmitter<void>;

    public render() {
        if (this.item.isPopover) {
            return [<button>{this.renderPopover()}</button>];
        }

        return [
            <button
                tabindex="0"
                title={this.getToolTipText()}
                type="button"
                class={{
                    step: true,
                    selected: this.item?.selected,
                }}
                onClick={this.handleClick}
            >
                {this.renderIcon()}
                <span class="text">{this.item.text}</span>
            </button>,
        ];
    }
    private renderPopover() {
        return [
            <limel-menu items={[{ text: 'item1' }]}>
                <button
                    tabindex="0"
                    title={this.getToolTipText()}
                    type="button"
                    slot="trigger"
                    class={{
                        step: true,
                        selected: this.item?.selected,
                    }}
                    onClick={this.handleClick}
                >
                    {this.renderIcon()}
                    <span class="text">{this.item.text}</span>
                </button>
            </limel-menu>,
        ];
    }

    private getToolTipText() {
        if (!this.item.secondaryText) {
            return this.item.text;
        }

        return [this.item.text, this.item.secondaryText].join(' · ');
    }

    private handleClick = () => {
        this.interact.emit();
    };

    private renderIcon() {
        if (!this.item.icon) {
            return;
        }

        return <limel-icon name={this.item.icon} size="small" class="icon" />;
    }
}
