/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BYFOFirebaseAdapter, Metadata, Player, RejoinData, RoundData, TPStore } from "byfo-utils";
import { RejoinData as RejoinData1 } from "byfo-utils/dist/types";
export { BYFOFirebaseAdapter, Metadata, Player, RejoinData, RoundData, TPStore } from "byfo-utils";
export { RejoinData as RejoinData1 } from "byfo-utils/dist/types";
export namespace Components {
    interface ByfoIcon {
        "icon": any;
    }
    interface TpCanvas {
        "exportDrawing": () => Promise<Blob>;
        "height": number;
        "hostEl": HTMLElement;
        "restoreBackup": (pathsString: any) => Promise<void>;
        "width": number;
    }
    interface TpCanvasControls {
        "hostEl": HTMLElement;
        "isSending": boolean;
        "submithandler": (e: Event) => void;
    }
    interface TpContent {
        "content": string;
        "sendingTo": string;
        "type": string;
    }
    interface TpInfoBubble {
        "content": string;
    }
    interface TpInputZone {
        "characterLimit": number;
        "isSending": boolean;
        "round": number;
        "sendingTo": string;
    }
    interface TpJoinContent {
        "firebase": BYFOFirebaseAdapter;
        "gameid": string;
        "rejoinData": RejoinData;
    }
    interface TpLogo {
    }
    interface TpMetadataModal {
        "enabled": boolean;
        "gameid": string;
        "metadata": Metadata;
    }
    interface TpPlayerList {
        "addTime"?: ()=>void;
        "lastRound"?: string;
        "messageEnd"?: string;
        "messageStart"?: string;
        "players": Player[];
        "roundData"?: RoundData;
    }
    interface TpReviewChat {
        "showAll": any;
        "stackProxy": any;
    }
    interface TpRoutingModal {
        "enabled": boolean;
        "firebase": BYFOFirebaseAdapter;
        "rejoin"?: RejoinData1 | null;
        "type": 'host' | 'join' | 'result' | undefined;
    }
    interface TpSettingsModal {
        "buildDate": { year: string; full?: string; date?: Date };
        "enabled": boolean;
        "store": TPStore;
    }
    interface TpTimeInput {
        "initialValue": any;
        "maxMinutes": any;
        "maxSeconds": any;
        "placeholder": any;
        "timeError": string;
        "value": number;
    }
    interface TpTimer {
        "addTime": ()=>void;
        "endtime": number;
        "offset": number;
    }
}
declare global {
    interface HTMLByfoIconElement extends Components.ByfoIcon, HTMLStencilElement {
    }
    var HTMLByfoIconElement: {
        prototype: HTMLByfoIconElement;
        new (): HTMLByfoIconElement;
    };
    interface HTMLTpCanvasElement extends Components.TpCanvas, HTMLStencilElement {
    }
    var HTMLTpCanvasElement: {
        prototype: HTMLTpCanvasElement;
        new (): HTMLTpCanvasElement;
    };
    interface HTMLTpCanvasControlsElement extends Components.TpCanvasControls, HTMLStencilElement {
    }
    var HTMLTpCanvasControlsElement: {
        prototype: HTMLTpCanvasControlsElement;
        new (): HTMLTpCanvasControlsElement;
    };
    interface HTMLTpContentElement extends Components.TpContent, HTMLStencilElement {
    }
    var HTMLTpContentElement: {
        prototype: HTMLTpContentElement;
        new (): HTMLTpContentElement;
    };
    interface HTMLTpInfoBubbleElement extends Components.TpInfoBubble, HTMLStencilElement {
    }
    var HTMLTpInfoBubbleElement: {
        prototype: HTMLTpInfoBubbleElement;
        new (): HTMLTpInfoBubbleElement;
    };
    interface HTMLTpInputZoneElement extends Components.TpInputZone, HTMLStencilElement {
    }
    var HTMLTpInputZoneElement: {
        prototype: HTMLTpInputZoneElement;
        new (): HTMLTpInputZoneElement;
    };
    interface HTMLTpJoinContentElement extends Components.TpJoinContent, HTMLStencilElement {
    }
    var HTMLTpJoinContentElement: {
        prototype: HTMLTpJoinContentElement;
        new (): HTMLTpJoinContentElement;
    };
    interface HTMLTpLogoElement extends Components.TpLogo, HTMLStencilElement {
    }
    var HTMLTpLogoElement: {
        prototype: HTMLTpLogoElement;
        new (): HTMLTpLogoElement;
    };
    interface HTMLTpMetadataModalElement extends Components.TpMetadataModal, HTMLStencilElement {
    }
    var HTMLTpMetadataModalElement: {
        prototype: HTMLTpMetadataModalElement;
        new (): HTMLTpMetadataModalElement;
    };
    interface HTMLTpPlayerListElement extends Components.TpPlayerList, HTMLStencilElement {
    }
    var HTMLTpPlayerListElement: {
        prototype: HTMLTpPlayerListElement;
        new (): HTMLTpPlayerListElement;
    };
    interface HTMLTpReviewChatElement extends Components.TpReviewChat, HTMLStencilElement {
    }
    var HTMLTpReviewChatElement: {
        prototype: HTMLTpReviewChatElement;
        new (): HTMLTpReviewChatElement;
    };
    interface HTMLTpRoutingModalElement extends Components.TpRoutingModal, HTMLStencilElement {
    }
    var HTMLTpRoutingModalElement: {
        prototype: HTMLTpRoutingModalElement;
        new (): HTMLTpRoutingModalElement;
    };
    interface HTMLTpSettingsModalElement extends Components.TpSettingsModal, HTMLStencilElement {
    }
    var HTMLTpSettingsModalElement: {
        prototype: HTMLTpSettingsModalElement;
        new (): HTMLTpSettingsModalElement;
    };
    interface HTMLTpTimeInputElement extends Components.TpTimeInput, HTMLStencilElement {
    }
    var HTMLTpTimeInputElement: {
        prototype: HTMLTpTimeInputElement;
        new (): HTMLTpTimeInputElement;
    };
    interface HTMLTpTimerElement extends Components.TpTimer, HTMLStencilElement {
    }
    var HTMLTpTimerElement: {
        prototype: HTMLTpTimerElement;
        new (): HTMLTpTimerElement;
    };
    interface HTMLElementTagNameMap {
        "byfo-icon": HTMLByfoIconElement;
        "tp-canvas": HTMLTpCanvasElement;
        "tp-canvas-controls": HTMLTpCanvasControlsElement;
        "tp-content": HTMLTpContentElement;
        "tp-info-bubble": HTMLTpInfoBubbleElement;
        "tp-input-zone": HTMLTpInputZoneElement;
        "tp-join-content": HTMLTpJoinContentElement;
        "tp-logo": HTMLTpLogoElement;
        "tp-metadata-modal": HTMLTpMetadataModalElement;
        "tp-player-list": HTMLTpPlayerListElement;
        "tp-review-chat": HTMLTpReviewChatElement;
        "tp-routing-modal": HTMLTpRoutingModalElement;
        "tp-settings-modal": HTMLTpSettingsModalElement;
        "tp-time-input": HTMLTpTimeInputElement;
        "tp-timer": HTMLTpTimerElement;
    }
}
declare namespace LocalJSX {
    interface ByfoIcon {
        "icon"?: any;
    }
    interface TpCanvas {
        "height"?: number;
        "hostEl"?: HTMLElement;
        "width"?: number;
    }
    interface TpCanvasControls {
        "hostEl"?: HTMLElement;
        "isSending"?: boolean;
        "submithandler"?: (e: Event) => void;
    }
    interface TpContent {
        "content"?: string;
        "sendingTo"?: string;
        "type"?: string;
    }
    interface TpInfoBubble {
        "content"?: string;
    }
    interface TpInputZone {
        "characterLimit"?: number;
        "isSending"?: boolean;
        "round"?: number;
        "sendingTo"?: string;
    }
    interface TpJoinContent {
        "firebase"?: BYFOFirebaseAdapter;
        "gameid"?: string;
        "rejoinData"?: RejoinData;
    }
    interface TpLogo {
    }
    interface TpMetadataModal {
        "enabled"?: boolean;
        "gameid"?: string;
        "metadata"?: Metadata;
    }
    interface TpPlayerList {
        "addTime"?: ()=>void;
        "lastRound"?: string;
        "messageEnd"?: string;
        "messageStart"?: string;
        "players"?: Player[];
        "roundData"?: RoundData;
    }
    interface TpReviewChat {
        "showAll"?: any;
        "stackProxy"?: any;
    }
    interface TpRoutingModal {
        "enabled"?: boolean;
        "firebase"?: BYFOFirebaseAdapter;
        "rejoin"?: RejoinData1 | null;
        "type"?: 'host' | 'join' | 'result' | undefined;
    }
    interface TpSettingsModal {
        "buildDate"?: { year: string; full?: string; date?: Date };
        "enabled"?: boolean;
        "store"?: TPStore;
    }
    interface TpTimeInput {
        "initialValue"?: any;
        "maxMinutes"?: any;
        "maxSeconds"?: any;
        "placeholder"?: any;
        "timeError"?: string;
        "value"?: number;
    }
    interface TpTimer {
        "addTime"?: ()=>void;
        "endtime"?: number;
        "offset"?: number;
    }
    interface IntrinsicElements {
        "byfo-icon": ByfoIcon;
        "tp-canvas": TpCanvas;
        "tp-canvas-controls": TpCanvasControls;
        "tp-content": TpContent;
        "tp-info-bubble": TpInfoBubble;
        "tp-input-zone": TpInputZone;
        "tp-join-content": TpJoinContent;
        "tp-logo": TpLogo;
        "tp-metadata-modal": TpMetadataModal;
        "tp-player-list": TpPlayerList;
        "tp-review-chat": TpReviewChat;
        "tp-routing-modal": TpRoutingModal;
        "tp-settings-modal": TpSettingsModal;
        "tp-time-input": TpTimeInput;
        "tp-timer": TpTimer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "byfo-icon": LocalJSX.ByfoIcon & JSXBase.HTMLAttributes<HTMLByfoIconElement>;
            "tp-canvas": LocalJSX.TpCanvas & JSXBase.HTMLAttributes<HTMLTpCanvasElement>;
            "tp-canvas-controls": LocalJSX.TpCanvasControls & JSXBase.HTMLAttributes<HTMLTpCanvasControlsElement>;
            "tp-content": LocalJSX.TpContent & JSXBase.HTMLAttributes<HTMLTpContentElement>;
            "tp-info-bubble": LocalJSX.TpInfoBubble & JSXBase.HTMLAttributes<HTMLTpInfoBubbleElement>;
            "tp-input-zone": LocalJSX.TpInputZone & JSXBase.HTMLAttributes<HTMLTpInputZoneElement>;
            "tp-join-content": LocalJSX.TpJoinContent & JSXBase.HTMLAttributes<HTMLTpJoinContentElement>;
            "tp-logo": LocalJSX.TpLogo & JSXBase.HTMLAttributes<HTMLTpLogoElement>;
            "tp-metadata-modal": LocalJSX.TpMetadataModal & JSXBase.HTMLAttributes<HTMLTpMetadataModalElement>;
            "tp-player-list": LocalJSX.TpPlayerList & JSXBase.HTMLAttributes<HTMLTpPlayerListElement>;
            "tp-review-chat": LocalJSX.TpReviewChat & JSXBase.HTMLAttributes<HTMLTpReviewChatElement>;
            "tp-routing-modal": LocalJSX.TpRoutingModal & JSXBase.HTMLAttributes<HTMLTpRoutingModalElement>;
            "tp-settings-modal": LocalJSX.TpSettingsModal & JSXBase.HTMLAttributes<HTMLTpSettingsModalElement>;
            "tp-time-input": LocalJSX.TpTimeInput & JSXBase.HTMLAttributes<HTMLTpTimeInputElement>;
            "tp-timer": LocalJSX.TpTimer & JSXBase.HTMLAttributes<HTMLTpTimerElement>;
        }
    }
}
