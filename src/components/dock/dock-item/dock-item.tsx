import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
    State,
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

    @State()
    private isOpen = false;

    public render() {
        if (this.item.isPopover) {
            return <div>{this.renderPopover()}</div>;
        }

        if (this.item.isCollapsible) {
            return <div>{this.renderCollapsible()}</div>;
        }

        return [
            <button
                tabindex="0"
                title={this.getToolTipText()}
                type="button"
                class={{
                    button: true,
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
            <limel-popover open={this.isOpen} onClose={this.onPopoverClose}>
                <limel-button
                    slot="trigger"
                    primary={true}
                    label={this.getToolTipText()}
                    onClick={this.openPopover}
                />
                <p style={{ margin: '0.5rem 1rem' }} tabindex="0">
                    Content
                </p>
            </limel-popover>,
        ];
    }
    private openPopover = (event: MouseEvent) => {
        event.stopPropagation();
        this.isOpen = true;
    };

    private onPopoverClose = (event: CustomEvent) => {
        event.stopPropagation();
        this.isOpen = false;
    };

    private renderCollapsible() {
        return [
            <limel-collapsible-section header={this.item.text}>
                <p>Pinned object.</p>

                <button
                    tabindex="0"
                    title={this.getToolTipText()}
                    type="button"
                    slot="trigger"
                    class={{
                        button: true,
                        selected: this.item?.selected,
                    }}
                    onClick={this.handleClick}
                >
                    {this.renderIcon()}
                    <span class="text">{this.item.text}</span>
                </button>
            </limel-collapsible-section>,
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
