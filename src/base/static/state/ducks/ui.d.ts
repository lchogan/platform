/* eslint-disable @typescript-eslint/no-explicit-any */
declare type Action = {
  type: string;
  payload: any;
};

export type Layout = "desktop" | "mobile";

export const currentTemplateSelector: any;
export const isEditModeToggled: any;
// TODO: Replace this general visibility selector with UI-specific selectors.
export const uiVisibilitySelector: any;
export const rightSidebarVisibilitySelector: (state: any) => boolean;
export const measurementToolVisibilitySelector: any;
export const contentPanelComponentSelector: any;
export const pageSlugSelector: any;
export const layoutSelector: any;

export const RESET_UI: string;

// Action creators:
export const resetUi: any;

export const updateCurrentTemplate: any;
export const updateEditModeToggled: any;
export const updateUIVisibility: any;
export const updateMeasurementToolVisibility: any;
export const updateActivePage: any;
export const updateContentPanelComponent: any;
export const updateLayout: any;
export const updateSpotlightMaskVisibility: (isVisible: boolean) => Action;
