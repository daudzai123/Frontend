export type ButtonType = 'primary' | 'secondary' | 'warning' | 'info' | 'success' | 'danger';

export const buttonStyles: Record<ButtonType, string> = {
  primary:
    'bg-primary-color text-primary-color-inverse dark:bg-primary-dark-color dark:text-primary-dark-color-inverse',

  secondary:
    'bg-secondary-color text-secondary-color-inverse dark:bg-secondary-dark-color dark:text-secondary-dark-color-inverse',

  warning:
    'bg-warning-color text-warning-color-inverse dark:bg-warning-dark-color dark:text-warning-dark-color-inverse',

  info: 'bg-info-color text-info-color-inverse dark:bg-info-dark-color dark:text-info-dark-color-inverse',

  success:
    'bg-success-color text-success-color-inverse dark:bg-success-dark-color dark:text-success-dark-color-inverse',

  danger:
    'bg-danger-color text-danger-color-inverse dark:bg-danger-dark-color dark:text-danger-dark-color-inverse',
};
