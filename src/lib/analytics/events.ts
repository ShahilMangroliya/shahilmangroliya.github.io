/**
 * Central catalog of analytics event names. Referencing these constants instead
 * of inline strings keeps event names consistent and documents, in one place,
 * everything the site captures.
 */
export const AnalyticsEvent = {
  PageView: "page_view",
  Click: "click",
  OutboundClick: "outbound_click",
  ScrollDepth: "scroll_depth",
  SectionView: "section_view",
  EngagementTime: "engagement_time",
  WebVital: "web_vital",
  Exception: "exception",
} as const;

export type AnalyticsEventName = (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];
