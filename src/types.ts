export interface CapabilityItem {
  id: string;
  label: string;
  icon: string;
  cardTargetId?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface IntegrationApp {
  name: string;
  color: string;
  category: string;
}

export interface SystemCardData {
  id: string;
  title: string;
  positionDesktop: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}
