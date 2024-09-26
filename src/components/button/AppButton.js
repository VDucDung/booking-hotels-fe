import { Link } from 'react-router-dom';

function AppButton({
  to,
  href,
  primary = false,
  outline = false,
  large = false,
  action = false,
  checkout = false,
  haveProducts = false,
  disabled = false,
  auth = false,
  authGoogle = false,
  more = false,
  order = false,
  cancel = false,
  send = false,
  className,
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = `
    ${className} 
    ${primary ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} 
    ${outline ? 'border border-gray-500' : ''} 
    ${large ? 'py-3 px-6 text-lg' : 'py-2 px-4 text-base'} 
    ${action ? 'cursor-pointer' : 'cursor-default'} 
    ${checkout ? 'text-green-600' : ''}
    ${haveProducts ? 'bg-yellow-200' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
    ${auth ? 'bg-red-500' : ''}
    ${authGoogle ? 'bg-green-500' : ''}
    ${more ? 'bg-purple-500' : ''}
    ${order ? 'bg-orange-500' : ''}
    ${cancel ? 'bg-red-600' : ''}
    ${send ? 'bg-blue-600' : ''}
  `;

  return (
    <Comp className={classes.trim()} {...props}>
      {leftIcon && <span className="inline-block mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-block ml-2">{rightIcon}</span>}
    </Comp>
  );
}

export default AppButton;
