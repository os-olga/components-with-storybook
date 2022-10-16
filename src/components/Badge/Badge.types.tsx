  export type BadgeProps = {
    text: string;
    size: 'sm' | 'md' | 'lg';
    type: BadgeTypeEnum;
    className?: string;
    style?: React.CSSProperties;
  };
  
  export enum BadgeTypeEnum {
    notAvailable = 'notAvailable',
    new = 'new',
    popular = 'popular',
    inactive = 'inactive',
    active = 'active',
    deactivated = 'deactivated',
    process = 'process',
    onApproval = 'onApproval',
    completed = 'completed',
    unpublished = 'unpublished',
    recomended = 'recomended',
    competitorPosition = 'competitorPosition'
}